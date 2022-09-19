const mongoose = require("mongoose");
const moment = require("moment");

const FeedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  contents: {
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
  previewImg: {
    type: String,
  },
  images: [{ type: String }],
  tags: [{ type: String }],
});

const Feed = mongoose.model("feed", FeedSchema);

module.exports = { Feed };
