const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const request = require("request");
const { auth } = require("../../middleware/auth");
const config = require("../../config/index");

const nodemailer = require("nodemailer");

const { JWT_SECRET, NODEMAILER_USER, NODEMAILER_PASS } = config;
const { User } = require("../../models/user");
const { Feed } = require("../../models/feed");
const { Event } = require("../../models/event");
const { Notice } = require("../../models/notice");
const { Photo } = require("../../models/photo");
const { PlayList } = require("../../models/playList");

const router = express.Router();

// LOGIN / POST
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email)
    return res
      .status(400)
      .json({ isSuc: false, msg: "이메일을 작성해주세요." });
  else if (!password)
    return res
      .status(400)
      .json({ isSuc: false, msg: "비밀번호를 작성해주세요." });

  User.findOne({ email }).then((user) => {
    if (!user)
      return res
        .status(400)
        .json({ isSuc: false, msg: "이메일을 확인해주세요." });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res
          .status(400)
          .json({ isSuc: false, msg: "비밀번호를 확인해주세요." });

      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) return res.status(400).json({ isSuc: false, msg: err });

          res.json({
            isSuc: true,
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

// GOOGLE LOGIN / POST
router.post("/google", (req, res) => {
  const { email, name, token } = req.body.data;

  if (token) {
    User.findOne({ email }).then((user) => {
      if (!user) {
        const newUser = new User({
          name,
          email,
          password: Math.random().toString(36).slice(-8),
          login_way: "google",
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
                }
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
          }
        );
      }
    });
  }
});

// CLOSE ACCOUNT / DELETE
router.delete("/:id", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    await Feed.deleteMany({ creator: req.params.id });
    await Event.deleteMany({ creator: req.params.id });
    await Notice.deleteMany({ creator: req.params.id });
    await Photo.deleteMany({ creator: req.params.id });
    await PlayList.deleteMany({ creator: req.params.id });

    return res.status(200).json({ isSuc: true });
  } catch (e) {
    return res.status(400).json({ isSuc: false });
  }
});

// email 인증
router.post("/email", async (req, res) => {
  const { email } = req.body;

  User.findOne({ email }).then(async (user) => {
    if (!user) return res.status(400).json({ isSuc: false });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmlail.com",
      port: 587,
      secure: false,
      auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS,
      },
    });

    let mailOptions = {
      from: NODEMAILER_USER,
      to: email,
      subject: "[FUKIN FRIENDS] 비밀번호 변경 링크입니다.",
      html: `<div>아래 링크를 클릭해 비밀번호를 변경해주세요.</div><br/><a href="http://localhost:3000/pw/change/${user._id}">인증하기</a>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(400).json({ isSuc: false });
      }

      res.send({ isSuc: true });
      transporter.close();
    });
  });
});

// Send Phone Auth / POST
router.post("/phone", (req, res) => {
  let authNum = "";
  for (let i = 0; i < 6; i++) {
    authNum += Math.floor(Math.random() * 10);
  }

  let user_phone_number = "01056294023";

  const date = Date.now().toString();
  const uri = "ncp:sms:kr:291519131115:fukinfriends"; //서비스 ID
  const secretKey = "Dljv9eXbcArxR9QomY5vk6rWIlmd9P6xFBH0rqKd";
  const accessKey = "2zhD9dT9rnNJWgIYd6rs";
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

  request(
    {
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
        messages: [{ to: `${user_phone_number}` }],
      },
    },
    function (err) {
      if (err) {
        res.json({ isSuc: false });
      } else {
        res.json({ isSuc: true, num: authNum });
      }
    }
  );
});

// Authentication / POST
router.post("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(400).json({ msg: "유저가 존재하지 않습니다." });
    }

    const userRes = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    res.json({ isSuc: true, user: userRes });
  } catch (e) {
    res.status(400).json({ isSuc: false, msg: e.message });
  }
});

module.exports = router;
