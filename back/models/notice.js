const mongoose = require("mongoose");
const moment = require("moment");

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  location: {
    type: String,
  },
  detailLocation: {
    type: String,
  },
  date: {
    type: Date,
    default: moment().format("MMMM DD, YYYY"),
    required: true,
  },
  registerDate: {
    type: Date,
    default: moment().format("MMMM DD, YYYY"),
    required: true,
  },
  isImportant: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Notice = mongoose.model("notice", NoticeSchema);

module.exports = { Notice };
