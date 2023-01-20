const express = require("express");
const { User } = require("../../models/user");
const { Notice } = require("../../models/notice");

const router = express.Router();

router.get("/skip/:page", async (req, res) => {
  try {
    let page = (Number(req.params.page) - 1) * 8;

    const noticeCount = await Notice.countDocuments();
    const noticeFindResult = await Notice.find()
      .skip(page)
      .limit(8)
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      allNoticesCnt: noticeCount,
      notices: noticeFindResult,
    });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
});

router.get("/important", async (req, res) => {
  try {
    const notices = await Notice.find({ isImportant: true })
      .limit(3)
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      notices,
    });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
});

router.get("/:term/:skip", async (req, res, next) => {
  try {
    let page = (Number(req.params.skip) - 1) * 8;

    const noticeCount = await Notice.countDocuments({
      title: {
        $regex: req.params.term,
        $options: "i",
      },
    });
    const result = await Notice.find({
      title: {
        $regex: req.params.term,
        $options: "i",
      },
    })
      .skip(page)
      .limit(8)
      .sort({ date: -1 });

    res.send({ success: true, notices: result, searchAllCnt: noticeCount });
  } catch (e) {
    next(e);
  }
});

router.get("/main", async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 }).limit(8);

  if (!notices)
    return res
      .status(400)
      .json({ success: false, msg: "공지사항이 존재하지 않습니다." });

  res.status(200).json({
    success: true,
    notices: notices,
  });
});

router.post("/", (req, res) => {
  const {
    userId,
    title,
    content,
    location,
    detailLocation,
    date,
    isImportant,
  } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ success: false });

    const newNotice = new Notice({
      title,
      content,
      location,
      detailLocation,
      date,
      creator: userId,
      isImportant,
    });

    newNotice.save().then(() => {
      User.findByIdAndUpdate(userId, {
        $push: {
          notices: newNotice._id,
        },
      })
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((e) => {
          res.status(400).json({ success: false });
        });
    });
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Notice.findOne({ _id: id }).then((notice) => {
    if (!notice)
      return res
        .status(400)
        .json({ success: false, msg: "해당 공지사항이 존재하지 않습니다." });

    res.status(200).json({ success: true, notice: notice });
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, content, location, detailLocation, date, isImportant } =
    req.body.notice;

  Notice.findByIdAndUpdate(id, {
    title,
    content,
    location,
    detailLocation,
    date,
    isImportant,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // 유저 내부 공지사항 삭제도 해야됨
    await Notice.deleteOne({ _id: id });

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
