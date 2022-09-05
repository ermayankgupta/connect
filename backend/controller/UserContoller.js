const asyncHandler = require("express-async-handler");
const User = require("../model/UserModal");

const registerUser = asyncHandler(async (req, res) => {
  const { name } = req.body;
  res.json({name:name})
});

module.exports = { registerUser };
