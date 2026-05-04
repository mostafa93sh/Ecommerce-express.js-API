const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../utils");
const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ name, email, password, role });

  // attachCookiesToResponse({ res, user: createTokenUser(user) });
  res.status(StatusCodes.CREATED).json({ user: createTokenUser(user) });
};
const login = async (req, res) => {
  res.send("login work");
};
const logout = async (req, res) => {
  res.send("logout work");
};

module.exports = {
  register,
  login,
  logout,
};
