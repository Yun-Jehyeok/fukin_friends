const express = require('express');
const { User } = require('../../models/user');
const { Notice } = require('../../models/notice');

const router = express.Router();

// Find All Notices / GET
router.get('/', async (req, res) => {
  const notices = await Notice.find();

  if (!notices)
    return res.status(400).json({ isSuccess: false, msg: '공지사항이 존재하지 않습니다.' });
  
  res.status(200).json({
    isSuccess: true,
    notices: notices,
  });
})

// Get Notices with Pagination / GET
router.get('/skip/:skip', async (req, res) => {
  try {
    const noticeCount = await Notice.countDocuments();
    const noticeFindResult = await Notice.find()
      .skip(Number(req.params.skip))
      .limit(12)
      .sort({ date: -1 });

    res.json({ isSuccess: true, allNoticesCnt: noticeCount, notices: noticeFindResult });
  } catch (e) {
    res.json({ isSuccess: false, msg: e.message });
  }
});

// Create Notice / POST
router.post('/create', (req, res) => {
  const { userId, title, content, location, date } = req.body;

  User.findOne({ _id: userId }).then((user) => {
    if (!user)
      return res.status(400).json({ isSuccess: false });

    const newNotice = new Notice({
        title,
        content, 
        location, 
        date,
        creator: userId
    })
    
    newNotice.save().then(() => {
        User.findByIdAndUpdate(userId, {
            $push: {
              notices: newNotice._id,
            },
        }).then(() => {
            res.json({ isSuccess: true })
        }).catch(e => {
            res.status(400).json({ isSuccess: false });
        });
    })
  });
});

module.exports = router;
