const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModal");

const authUser = asyncHandler(async (req, res, next) => {
 
  if (
    req.headers.authorization
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
      req.user = await User.findById(decodedToken.id).select("-password")
      console.log(req.user)
      next()
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
});

module.exports = authUser
