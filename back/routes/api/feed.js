const express = require("express");
const { User } = require("../../models/user");
const { Feed } = require("../../models/feed");

const router = express.Router();

// Get Feeds with Pagination / GET
router.get("/skip/:skip", async (req, res) => {
  try {
    const feedCount = await Feed.countDocuments();
    const feedFindResult = await Feed.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 })
      .populate({ path: "creator" });

    feedFindResult = feedFindResult.map((item) => {
      item.userName = item.creator.name;
      item.creator = item.creator._id;

      return item;
    });

    // 시바

    console.log(feedFindResult);

    res.status(200).json({
      success: true,
      allFeedsCnt: feedCount,
      feeds: feedFindResult,
    });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
});

// Create feed / POST
router.post("/", (req, res) => {
  const { userId, content, imgs, tags } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ success: false });

    const newFeed = new Feed({
      content,
      previewImg: imgs[0],
      imgs: imgs,
      tags,
      creator: userId,
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

// Get Feed Detail / GET
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Feed.findOne({ _id: id })
    .populate("user")
    .then((feed) => {
      if (!feed)
        return res
          .status(400)
          .json({ success: false, msg: "해당 피드가 존재하지 않습니다." });

      res.status(200).json({ success: true, feed: feed });
    });
});

// Update Feed / PUT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { content, imgs, tags } = req.body;

  Feed.findByIdAndUpdate(id, {
    $push: {
      content,
      imgs: imgs,
      tags,
      previewImg: imgs[0],
    },
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
});

// Delete Feed / DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await User.deleteOne({ feeds: req.params.id });
    await Feed.deleteOne({ _id: id });

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
