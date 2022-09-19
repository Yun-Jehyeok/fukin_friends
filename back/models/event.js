const mongoose = require('mongoose');
const moment = require('moment');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: moment().format('MMMM DD, YYYY'),
    required: true,
  },
  registerDate: {
    type: Date,
    default: moment().format('MMMM DD, YYYY'),
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }
});

const Event = mongoose.model('event', EventSchema);

module.exports = { Event };
