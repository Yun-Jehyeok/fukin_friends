const express = require("express");
const { User } = require("../../models/user");
const { Feed } = require("../../models/feed");

const router = express.Router();

router.get("/skip/:skip", async (req, res) => {
  try {
    const feedCount = await Feed.countDocuments();
    const feedFindResult = await Feed.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 })
      .populate({ path: "creatorName" });

    res.status(200).json({
      success: true,
      allFeedsCnt: feedCount,
      feeds: feedFindResult,
    });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
});

router.post("/", (req, res) => {
  const { userId, content, imgs, tags } = req.body;

  console.log("tags:::", tags);

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ success: false });

    const newFeed = new Feed({
      content,
      previewImg: imgs[0],
      imgs: imgs,
      tags,
      creator: userId,
      creatorName: user.name,
    });

    newFeed.save().then(() => {
      User.findByIdAndUpdate(userId, {
        $push: {
          feeds: newFeed._id,
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

  Feed.findOne({ _id: id })
    .populate("creatorName")
    .then((feed) => {
      if (!feed)
        return res
          .status(400)
          .json({ success: false, msg: "해당 피드가 존재하지 않습니다." });

      res.status(200).json({ success: true, feed: feed });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { content, imgs, tags } = req.body.feed;

  Feed.findByIdAndUpdate(id, {
    content,
    imgs: imgs,
    tags,
    previewImg: imgs[0],
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
});

router.delete("/:id/:userId", async (req, res) => {
  const { id, userId } = req.params;

  try {
    // User의 피드 삭제 안됨
    await User.findByIdAndUpdate(userId, {
      $pull: {
        feeds: { _id: id },
      },
    });
    await Feed.deleteOne({ _id: id });

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
