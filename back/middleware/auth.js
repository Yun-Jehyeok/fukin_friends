const jwt = require("jsonwebtoken");
const config = require("../config/index");

const { JWT_SECRET } = config;

const auth = (req, res, next) => {
  const token = req.body.token.token;

  if (!token) {
    return res
      .status(401)
      .json({ msg: "토큰이 존재하지 않아 인증이 거부되었습니다." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (e) {
    res.status(400).json({ isSuc: false, msg: e.message });
  }
};

module.exports = { auth };
