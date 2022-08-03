const mongoose = require('mongoose');
const moment = require('moment');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  contents: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
  date: {
    type: String,
    default: moment().format('MMMM DD, YYYY'),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model('post', PostSchema);

module.exports = { Post };
