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
// router.put("/update", authenticatedUser, updateUser);
router.put("/updatePassword", authenticatedUser, updateUserPassword);
// router.get("/:id", authenticatedUser, authorizePermissions("admin"), getSingleUser);

module.exports = router;
