const mongoose = require("mongoose");

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
});

const Notice = mongoose.model("notice", NoticeSchema);

module.exports = { Notice };
