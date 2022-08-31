const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    member: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
    ]
});

const Group = mongoose.model('group', GroupSchema);

module.exports = { Group };
