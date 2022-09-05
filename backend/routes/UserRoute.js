const express = require('express')
const router = express.Router();
const {registerUser,getUser} = require ("../controller/UserContoller")
router.post('/',registerUser)
router.get('get',getUser)
module.exports = router;