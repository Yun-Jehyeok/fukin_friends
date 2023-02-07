const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const config = require("../../config/index");
const { User } = require("../../models/user");
const { Feed } = require("../../models/feed");

const router = express.Router();

const { S3_ACCESS_KEY, S3_SECRET_ACCESS_KEY } = config;

AWS.config.update({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const uploadS3 = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "fukinfriends",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `feed/${file.originalname}_${new Date().valueOf()}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

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

router.post("/image", uploadS3.array("imgs", 3), async (req, res) => {
  try {
    res.json({ success: true, url: req.files.map((v) => v.location) });
  } catch (e) {
    console.error(e);
    res.json({ success: false, url: null });
  }
});

router.post("/", uploadS3.array("imgs", 3), async (req, res) => {
  const { userId, content, imgs, tags } = req.body;

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
