const mongoose = require('mongoose');
const moment = require('moment');

const FeedSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true,
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
  likes: {
    type: Number,
    default: 0,
  }
});

const Feed = mongoose.model('feed', FeedSchema);

module.exports = { Feed };
