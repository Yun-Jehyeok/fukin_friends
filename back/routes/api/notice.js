const express = require('express');
const { User } = require('../../models/user');
const { Group } = require('../../models/group');
const { Notice } = require('../../models/notice');

const router = express.Router();

// Find All Notice / GET
router.get('/:groupId', (req, res) => {
  let groupId = req.params.groupId;

  Group.findOne({ _id: groupId }).populate('notices').then((group) => {
    console.log("groups:::", group);

    if(group) {
        res.json({ notices: group.notices });
    } else {
        res.json({ isSuccess: false });
    }
  })
})

// Create Notice / POST
router.post('/', (req, res) => {
  const { userId, groupId, title, content } = req.body.notice;

  if (!title)
    return res.status(400).json({ msg: '제목을 작성해주세요.' });

    Group.findOne({ _id: groupId }).then((group) => {

    })
  User.findOne({ userId }).then((user) => {
    if (!user)
      return res.status(400).json({ msg: '유저를 찾을 수 없습니다.' });

    const newGroup = new Group({
        title,
        member
    })
    
    newGroup.save().then((group) => {
        User.findByIdAndUpdate(userId, {
            $push: {
              groups: newGroup._id,
            },
        }).then(() => {
            res.json({
                id: group.id,
                title: group.title,
                member: group.member
            })
        }).catch(e => {
            res.status(400).json({ msg: e });
        });
    })
  });
});

module.exports = router;
