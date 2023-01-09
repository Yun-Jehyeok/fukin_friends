const mongoose = require("mongoose");
const moment = require("moment");

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: moment().format("MMMM DD, YYYY"),
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  pathId: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = { Comment };
