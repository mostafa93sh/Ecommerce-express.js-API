const jwt = require("jsonwebtoken");

const createTokenUser = ({ payload }) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  createTokenUser,
  isTokenValid,
};
