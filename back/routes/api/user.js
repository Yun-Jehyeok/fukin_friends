const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');
const config = require('../../config/index');

const { JWT_SECRET } = config;

const router = express.Router();

// Get All User / GET
router.get('/', async (req, res) => {
  try {
    const users = await User.find();

    if (!users)
      return res.status(400).json({ msg: '유저가 존재하지 않습니다.' });

    res.status(200).json({
      users: users,
      isAuthenticated: true,
    });
  } catch (e) {
    console.log(e);
  }
});

// Register User / POST
router.post('/register', (req, res) => {
  const { name, email, password } = req.body.user;

  if (!name) return res.status(400).json({ msg: '이름을 작성해주세요.' });
  else if (!email)
    return res.status(400).json({ msg: '이메일을 작성해주세요.' });
  else if (!password)
    return res.status(400).json({ msg: '비밀번호를 입력해주세요.' });

  User.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({ msg: '이미 존재하는 이메일입니다.' });

    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(400).json({ err });

        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) return res.status(400).json({ err });

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            },
          );
        });
      });
    });
  });
});

// Change User Password / PUT
router.put('/password', (req, res) => {
  const { userId, password } = req.body.user;

  if (!password)
    return res.status(400).json({ msg: '비밀번호를 입력해주세요.' });

  User.findOne({ _id: userId }).then((user) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(400).json({ err });

        try {
          await User.findByIdAndUpdate(
            user.id,
            { password: hash },
            { new: true },
          );

          jwt.sign(
            { id: user.id },
            JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) return res.status(400).json({ err });

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            },
          );
        } catch (e) {
          console.log(e);
          res.json(e);
        }
      });
    });
  });
});

// 유저 검색
router.get('/search/:searchTerm', async (req, res) => {
  try {
    const users = await User.find({
      name: {
        $regex: req.params.searchTerm,
        $options: 'i',
      },
    });

    let result = users.map(item => {
      return {
        id: item._id,
        name: item.name,
        email: item.email
      }
    })

    res.send({ users: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
