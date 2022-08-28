const jwt = require('jsonwebtoken');
const config = require('../config/index');

const { JWT_SECRET } = config;

const auth = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res
      .status(401)
      .json({ msg: '토큰이 존재하지 않아 인증이 거부되었습니다.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: '토큰이 유효하지 않습니다.' });
  }
};

module.exports = { auth };
