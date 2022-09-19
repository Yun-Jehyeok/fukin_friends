const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    tags: [
        {
            type: String,
        }
    ],
    registerDate: {
      type: Date,
      default: moment().format('MMMM DD, YYYY'),
      required: true,
    }
});

const Photo = mongoose.model('photo', PhotoSchema);

module.exports = { Photo };
