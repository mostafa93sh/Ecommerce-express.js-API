const jwt = require("./jwt");

const { createTokenUser, isTokenValid } = jwt;

module.exports = {
  createTokenUser,
  isTokenValid,
};
