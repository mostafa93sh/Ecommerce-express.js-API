const jwt = require("./jwt");

const { createTokenUser, isTokenValid, attachCookiesToResponse } = jwt;

module.exports = {
  createTokenUser,
  isTokenValid,
  attachCookiesToResponse,
};
