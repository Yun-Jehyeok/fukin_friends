const moment = require('moment');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  login_way: {
    type: String,
    required: true,
    default: 'email',
  },
  register_date: {
    type: Date,
    default: moment().format('MMMM DD, YYYY'),
  },
  feeds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feed',
    },
  ],
  views: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feed',
    },
  ],
  comments: [
    {
      feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feed',
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
      },
    },
  ],
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group'
    }
  ]
});

const User = mongoose.model('user', UserSchema);

module.exports = { User };
