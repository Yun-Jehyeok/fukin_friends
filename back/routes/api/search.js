const express = require('express');
const { Post } = require('../../models/post');

const router = express.Router();

router.get('/:searchTerm', async (req, res, next) => {
  try {
    const result = await Post.find({
      title: {
        $regex: req.params.searchTerm,
        $options: 'i',
      },
    })
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 });

    res.send(result);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
