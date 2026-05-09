const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

const {
  authenticatedUser,
  authorizePermissions,
} = require("../middleware/authentication");

router.get("/", authenticatedUser, authorizePermissions("admin"), getAllUsers);
router.get("/showMe", authenticatedUser, showCurrentUser);

module.exports = router;
