const express = require("express");
const { User } = require("../../models/user");
const { Notice } = require("../../models/notice");

const router = express.Router();

// Find All Notices / GET
router.get("/", async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });

  if (!notices)
    return res
      .status(400)
      .json({ isSuc: false, msg: "공지사항이 존재하지 않습니다." });

  res.status(200).json({
    isSuc: true,
    notices: notices,
  });
});

// Find only 8 notices for main page / GET
router.get("/main", async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 }).limit(8);

  if (!notices)
    return res
      .status(400)
      .json({ isSuc: false, msg: "공지사항이 존재하지 않습니다." });

  res.status(200).json({
    isSuc: true,
    notices: notices,
  });
});

// Get Notices with Pagination / GET
router.get("/skip/:skip", async (req, res) => {
  try {
    const noticeCount = await Notice.countDocuments();
    const noticeFindResult = await Notice.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 });

    res.status(200).json({
      isSuc: true,
      allNoticesCnt: noticeCount,
      notices: noticeFindResult,
    });
  } catch (e) {
    res.status(400).json({ isSuc: false, msg: e.message });
  }
});

// Create Notice / POST
router.post("/", (req, res) => {
  const { userId, title, content, location, date } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ isSuc: false });

    const newNotice = new Notice({
      title,
      content,
      location,
      date,
      creator: userId,
    });

    newNotice.save().then(() => {
      User.findByIdAndUpdate(userId, {
        $push: {
          notices: newNotice._id,
        },
      })
        .then(() => {
          res.status(200).json({ isSuc: true });
        })
        .catch((e) => {
          res.status(400).json({ isSuc: false });
        });
    });
  });
});

// Get Notice Detail / GET
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Notice.findOne({ _id: id }).then((notice) => {
    if (!notice)
      return res
        .status(400)
        .json({ isSuc: false, msg: "해당 공지사항이 존재하지 않습니다." });

    res.status(200).json({ isSuc: true, notice: notice });
  });
});

// Update Notice / PUT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, content, location, date } = req.body.notice;

  Notice.findByIdAndUpdate(id, {
    title,
    content,
    location,
    date,
  })
    .then(() => {
      res.status(200).json({ isSuc: true });
    })
    .catch((e) => {
      res.status(400).json({ isSuc: false });
    });
});

// Delete Notice / DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // 유저 내부 공지사항 삭제도 해야됨
    await Notice.deleteOne({ _id: id });

    return res.status(200).json({ isSuc: true });
  } catch (e) {
    return res.status(400).json({ isSuc: false });
  }
});

module.exports = router;
