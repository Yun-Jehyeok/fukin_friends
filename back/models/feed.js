const mongoose = require("mongoose");
const moment = require("moment");

const FeedSchema = new mongoose.Schema({
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
  creatorName: {
    type: String,
    required: true,
  },
  previewImg: {
    type: String,
  },
  imgs: [{ type: String }],
  tags: [{ type: String }],
});

const Feed = mongoose.model("feed", FeedSchema);

module.exports = { Feed };
