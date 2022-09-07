const express = require('express')
const router = express.Router();
const {registerUser} = require ("../controller/UserContoller")

router.route("/").post(registerUser)
// router.get("/login").get(loginUser)

module.exports = router;    