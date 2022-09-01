const mongoose = require('mongoose');
const moment = require('moment');

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().format('MMMM DD, YYYY'),
  },
  feed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'feed',
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  creatorName: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = { Comment };
