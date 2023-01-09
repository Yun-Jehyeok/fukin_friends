const express = require("express");
const { User } = require("../../models/user");
const { Comment } = require("../../models/comment");
const { Notice } = require("../../models/notice");

const router = express.Router();

// Get All Comments / GET
router.get("/path=:path&:id", async (req, res) => {
  const id = req.params.id;
  const path = req.params.path;

  if (path === "notice") {
    const comments = await Comment.find({ path: path, pathId: id }).populate(
      "creator",
      "_id name email"
    );

    if (!comments)
      return res
        .status(400)
        .json({ success: false, msg: "댓글이 존재하지 않습니다." });

    res.status(200).json({
      success: true,
      comments: comments,
    });
  } else {
    res.status(400).json({
      success: false,
      msg: "path가 정확하지 않습니다.",
    });
  }
});

// Create Comment / POST
router.post("/", (req, res) => {
  const { path, pathId, userId, content } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user) return res.status(400).json({ success: false });

    const newComment = new Comment({
      content,
      date: new Date(),
      creator: userId,
      path,
      pathId,
    });

    newComment.save().then(() => {
      User.findByIdAndUpdate(userId, {
        $push: {
          comments: newComment._id,
        },
      })
        .then(() => {
          if (path === "notice") {
            Notice.findByIdAndUpdate(pathId, {
              $push: {
                comments: newComment._id,
              },
            })
              .then(() => {
                res.status(200).json({ success: true });
              })
              .catch((e) => {
                res.status(400).json({ success: false });
              });
          }
        })
        .catch((e) => {
          res.status(400).json({ success: false });
        });
    });
  });
});

// Update Comment / PUT
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { content } = req.body.comment;

  Comment.findByIdAndUpdate(id, {
    content,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
});

// Delete Notice / DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const { path, pathId, userId } = req.body;

  try {
    await Comment.deleteOne({ _id: id });

    // 유저의 댓글 삭제
    await User.findByIdAndUpdate(userId, {
      $pull: {
        comments: { id },
      },
    });

    if (path === "notice") {
      // Notice 의 댓글 삭제
      await Notice.findByIdAndUpdate(pathId, {
        $pull: {
          comments: { id },
        },
      });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(400).json({ success: false });
  }
});

module.exports = router;
