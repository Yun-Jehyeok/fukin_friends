const express = require('express');
const { Post } = require('../../models/post');
const { User } = require('../../models/user');
const { Comment } = require('../../models/comment');

var fs = require('fs');

const router = express.Router();
const moment = require('moment');
const dotenv = require('dotenv');

dotenv.config();

// VIEW COMMENT
router.get('/:id', async (req, res) => {
  try {
    const comment = await Post.findById(req.params.id).populate({
      path: 'comments',
    });

    const result = comment.comments;

    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

// WRITE COMMENT
router.post('/:id', async (req, res) => {
  if (!req.body.token)
    return res.status(400).json({ msg: '로그인이 필요합니다.' });

  const newComment = await Comment.create({
    contents: req.body.contents,
    creator: req.body.userId,
    creatorName: req.body.userName,
    post: req.body.id,
    date: moment().format('MMMM DD, YYYY'),
  });

  try {
    await Post.findByIdAndUpdate(req.body.id, {
      $push: {
        comments: newComment._id,
      },
    });

    await User.findByIdAndUpdate(req.body.userId, {
      $push: {
        comments: {
          post_id: req.body.id,
          comment_id: newComment._id,
        },
      },
    });

    res.json(newComment);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// DELETE COMMENT / DELETE
router.delete('/:id', async (req, res) => {
  await Comment.deleteOne({ _id: req.params.id });
  await User.findByIdAndUpdate(req.body.userId, {
    $pull: {
      comments: { comment_id: req.params.id },
    },
  });
  await Post.findOneAndUpdate(
    { comments: req.params.id },
    {
      $pull: { comments: req.params.id },
    },
  );

  return res.json({ success: true });
});

module.exports = router;
