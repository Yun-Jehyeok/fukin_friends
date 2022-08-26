const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const request = require('request');
const { auth } = require('../../middleware/auth');
const config = require('../../config/index');

const { JWT_SECRET } = config;
const { User } = require('../../models/user');
const { Post } = require('../../models/post');

const router = express.Router();

// LOGIN / POST
router.post('/login', (req, res) => {
  const { email, password } = req.body.user;

  if (!email) return res.status(400).json({ msg: '이메일을 작성해주세요.' });
  else if (!password)
    return res.status(400).json({ msg: '비밀번호를 작성해주세요.' });

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: '이메일을 확인해주세요.' });

    if (user.login_way === 'google')
      return res.status(400).json({ msg: '구글 아이디로 로그인 해주세요.' });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: '비밀번호를 확인해주세요.' });

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

// GOOGLE LOGIN / POST
router.post('/google', (req, res) => {
  const { email, name, tokenId } = req.body;

  if (tokenId) {
    User.findOne({ email }).then((user) => {
      if (!user) {
        const newUser = new User({
          name,
          email,
          password: Math.random().toString(36).slice(-8),
          login_way: 'google',
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
      } else {
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
      }
    });
  }
});

// LOGOUT / POST
router.post('/logout', (req, res) => {
  res.json('LOGOUT SUCCESS');
});

// CLOSE ACCOUNT / DELETE
router.delete('/:id', async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    await Post.deleteMany({ creator: req.params.id });

    return res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
});

// Check Email / POST
router.post('/password/email', (req, res) => {
  const { email } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: '이메일을 확인해주세요.' });

    if (user.login_way === 'google')
      return res
        .status(401)
        .json({ msg: '구글 계정은 비밀번호를 변경할 수 업습니다.' });

    return res
      .status(200)
      .json({ success: true, msg: '이메일이 인증되었습니다.' });
  });
});

// Check Phone / POST
router.post('/phone', (req, res) => {
  let authNum = ''
  for (let i = 0; i < 6; i++) {
    authNum += Math.floor(Math.random() * 10)
  }  
  
  let user_phone_number = '01056294023';

  const date = Date.now().toString();
  const uri = 'ncp:sms:kr:291519131115:fukinfriends'; //서비스 ID
  const secretKey = 'Dljv9eXbcArxR9QomY5vk6rWIlmd9P6xFBH0rqKd';
  const accessKey = '2zhD9dT9rnNJWgIYd6rs';
  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
  const url2 = `/sms/v2/services/${uri}/messages`;
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);

  request({
    method: method,
    json: true,
    uri: url,
    headers: {
      "Contenc-type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": date,
      "x-ncp-apigw-signature-v2": signature,
    },
    body: {
      type: "SMS",
      countryCode: "82",
      from: req.body.paData.phoneNum,
      content: `인증번호 [${authNum}]를 입력해주세요.`,
      messages: [
        { to: `${user_phone_number}`, },],
    },
  }, function (err) {
      if (err) {
        res.json({ success: false })
      } else {
        res.json({ success: true, num: authNum })
      }
    }
  );
})

// Authentication / GET
router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      return res.status(400).json({ msg: '유저가 존재하지 않습니다.' });
    }

    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
