const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const authenticatedUser = (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new UnauthenticatedError("Unauthorized");
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(req.user);
      next();
    } catch (error) {
      throw new UnauthenticatedError("Unauthorized");
    }
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      throw new UnauthenticatedError("Unauthorized to access this route");
    }
    next();
  };
};

module.exports = {
  authenticatedUser,
  authorizePermissions,
};
