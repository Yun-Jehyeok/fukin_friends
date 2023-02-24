const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const config = require("../../config/index");
const { Photo } = require("../../models/photo");
const { User } = require("../../models/user");

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
      cb(null, `album/${file.originalname}_${new Date().valueOf()}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/skip/:skip", async (req, res) => {
  try {
    const albumCount = await Photo.countDocuments();
    const albumFindResult = await Photo.find()
      .skip(Number(req.params.skip))
      .limit(48)
      .sort({ date: -1 })
      .populate({ path: "creator" });

    res.status(200).json({
      success: true,
      allAlbumsCnt: albumCount,
      albums: albumFindResult,
    });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
});

router.post("/", uploadS3.single("img"), async (req, res) => {
  try {
    res.json({ success: true, url: req.files[0].location });
  } catch (e) {
    console.error(e);
    res.json({ success: false, url: null });
  }
});

router.delete("/:id/:userId", async (req, res) => {
  const { id, userId } = req.params;

  try {
    // User의 포토 삭제 안됨
    await User.findByIdAndUpdate(userId, {
      $pull: {
        photos: { _id: id },
      },
    });
    await Photo.deleteOne({ _id: id });

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
