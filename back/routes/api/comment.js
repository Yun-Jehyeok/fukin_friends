const express = require("express");
const { User } = require("../../models/user");
const { Comment } = require("../../models/comment");
const { Notice } = require("../../models/notice");

const router = express.Router();

// Get All Comments / GET
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const path = req.body.path;

  const comments = await Comment.find({ path: path, _id: id });

  if (!comments)
    return res
      .status(400)
      .json({ isSuc: false, msg: "댓글이 존재하지 않습니다." });

  res.status(200).json({
    isSuc: true,
    comments: comments,
  });
});

// Create Comment / POST
router.post("/", (req, res) => {
  const { path, pathId, userId, content } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ isSuc: false });

    const newComment = new Comment({
      content,
      date: new Date(),
      creator: userId,
      path,
    });

    newComment.save().then(() => {
      User.findByIdAndUpdate(userId, {
        $push: {
          comments: newComment._id,
        },
      })
        .then(() => {
          res.status(200).json({ isSuc: true });
        })
        .catch((e) => {
          res.status(400).json({ isSuc: false });
        });

      if (path === "Notice") {
        Notice.findByIdAndUpdate(pathId, {
          $push: {
            comments: newComment._id,
          },
        })
          .then(() => {
            res.status(200).json({ isSuc: true });
          })
          .catch((e) => {
            res.status(400).json({ isSuc: false });
          });
      }
    });
  });
});

// Update Comment / PUT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { content } = req.body;

  Comment.findByIdAndUpdate(id, {
    content,
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
  const { userId, path, pathId } = req.body;

  try {
    await Comment.deleteOne({ _id: id });
    // 유저의 댓글 삭제

    if (path === "Notice") {
      // Notice 의 댓글 삭제
    }

    return res.status(200).json({ isSuc: true });
  } catch (e) {
    return res.status(400).json({ isSuc: false });
  }
});

module.exports = router;
