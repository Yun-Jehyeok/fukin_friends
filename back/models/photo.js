const mongoose = require("mongoose");
const moment = require("moment");

const PhotoSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createDate: {
    type: Date,
    default: moment().format("MMMM DD, YYYY"),
    required: true,
  },
  imgs: { type: String },
});

const Photo = mongoose.model("photo", PhotoSchema);

module.exports = { Photo };
