const mongoose = require('mongoose');

const PlayListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  tags: [
    { type: String }
  ],
  musics: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'music'
    }
  ]
});

const PlayList = mongoose.model('playList', PlayListSchema);

module.exports = { PlayList };
