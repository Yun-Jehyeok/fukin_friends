const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group',
    },
    location: {
      type: String
    },
    date: {
      type: String,
      default: moment().format('MMMM DD, YYYY'),
    }
});

const Notice = mongoose.model('notice', NoticeSchema);

module.exports = { Notice };
