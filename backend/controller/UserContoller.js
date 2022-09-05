const asyncHandler = require("express-async-handler");
const User = require("../model/UserModal");

const registerUser = asyncHandler(async (req, res) => {
  const { name } = req.body;
});
const getUser = asyncHandler(async (req,res)=>{
  res.json({
    name:"mayank"
  })
})

module.exports = { registerUser,getUser };
