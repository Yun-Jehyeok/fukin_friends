const express = require('express');
const { User } = require('../../models/user');
const { Group } = require('../../models/group');

const router = express.Router();

// Find All Group / GET
router.get('/:userId', (req, res) => {
  let userId = req.params.userId;

  User.findOne({ _id: userId }).populate('groups').then((user) => {
    let resGroup = [];

    user.groups.map(item => {
      let group = {
        id: item.id,
        title: item.title,
        member: item.member
      }

      resGroup.push(group);
    })

    res.json({ groups: resGroup });
  })
})

// Create Group / POST
router.post('/create', (req, res) => {
  const { userId, title, member } = req.body.group.group;

  if (!title)
    return res.status(400).json({ msg: '그룹명을 작성해주세요.' });

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
