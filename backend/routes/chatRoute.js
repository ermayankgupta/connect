const express = require("express");
const router = express.Router();
const authUser = require("../middleware/userAuth");
const { accessChat, fetchChat } = require("../controller/chatController");

router.route("/").post(authUser, accessChat);
router.route("/").get(authUser, fetchChat);
module.exports = router;
