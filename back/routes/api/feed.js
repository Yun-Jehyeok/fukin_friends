const express = require("express");
const { User } = require("../../models/user");
const { Feed } = require("../../models/feed");

const router = express.Router();

// Find All Feeds / GET
router.get("/", async (req, res) => {
  const feeds = await Feed.find();

  if (!feeds)
    return res
      .status(400)
      .json({ isSuccess: false, msg: "피드가 존재하지 않습니다." });

  res.status(200).json({
    isSuccess: true,
    feeds: feeds,
  });
});

// Get Feeds with Pagination / GET
router.get("/skip/:skip", async (req, res) => {
  try {
    const feedCount = await Feed.countDocuments();
    const feedFindResult = await Feed.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 });

    res.status(200).json({
      isSuccess: true,
      allFeedsCnt: feedCount,
      feeds: feedFindResult,
    });
  } catch (e) {
    res.status(400).json({ isSuccess: false, msg: e.message });
  }
});

// Create feed / POST
router.post("/create", (req, res) => {
  const { userId, title, content, imgs, tags } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ isSuccess: false });

    const newFeed = new Feed({
      title,
      content,
      previewImg: imgs[0],
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
          res.status(200).json({ isSuccess: true });
        })
        .catch((e) => {
          res.status(400).json({ isSuccess: false });
        });
    });
  });
});

// Get Feed Detail / GET
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Feed.findOne({ _id: id }).then((feed) => {
    if (!feed)
      return res
        .status(400)
        .json({ isSuccess: false, msg: "해당 피드가 존재하지 않습니다." });

    res.status(200).json({ isSuccess: true, feed: feed });
  });
});

// Update Feed / PUT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, content, imgs, tags } = req.body;

  Feed.findByIdAndUpdate(id, {
    $push: {
      title,
      content,
      imgs,
      tags,
      previewImg: imgs[0],
    },
  })
    .then(() => {
      res.status(200).json({ isSuccess: true });
    })
    .catch((e) => {
      res.status(400).json({ isSuccess: false });
    });
});

// Delete Feed / DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await User.deleteOne({ feeds: req.params.id });
    await Feed.deleteOne({ _id: id });

    return res.status(200).json({ isSuccess: true });
  } catch (e) {
    return res.status(400).json({ isSuccess: false });
  }
});

module.exports = router;
