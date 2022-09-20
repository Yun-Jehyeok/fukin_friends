const moment = require("moment");
const mongoose = require("mongoose");

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
  phone: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: moment().format("MMMM DD, YYYY"),
  },
  feeds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "feed",
    },
  ],
  notices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "notice",
    },
  ],
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "photo",
    },
  ],
  playLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "playList",
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };
