const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

const authenticatedUser = require("../middleware/authentication");

router.get("/", authenticatedUser, getAllUsers);

module.exports = router;
