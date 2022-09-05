const express = require('express')
const router = express.Router();
const {registerUser} = require ("../controller/UserContoller")
router.post('/',registerUser)
module.exports = router;