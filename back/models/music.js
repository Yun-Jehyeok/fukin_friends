const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  singer: {
    type: String,
    required: true,
  },
  lyric: {
    type: String,
  },
  img: {
    type: String
  }
});

const Music = mongoose.model('music', MusicSchema);

module.exports = { Music };
