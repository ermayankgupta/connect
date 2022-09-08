const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controller/UserContoller");
const authUser = require("../middleware/userAuth");

router.route("/").post(registerUser).get(authUser, allUsers);
router.route("/login").post(loginUser);

module.exports = router;
