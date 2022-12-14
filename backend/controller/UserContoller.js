const asyncHandler = require("express-async-handler");
const User = require("../model/UserModal");
const bcrypt = require("bcrypt");
const getToken = require("../config/jwtToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({
      error: "Please Enter All Fields",
    });
  }
  const userExits = await User.findOne({ email });
  if (userExits) {
    res.status(400).json({
      error: "User Already Exist",
    });
  } else {
    const encryptedPassword = await bcrypt.hash(password, 4);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: getToken(user._id),
        message: "user Created SuccesFully",
      });
    } else {
      res.send(400);
      throw new Error("User Not Found");
    }
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user._id,
      name: user.name,  
      email: user.email,
      pic: user.pic,
      token: getToken(user._id),
    });
  } else {
    res.status(404);
    res.send({
      error:"Email and password not match"
    })
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.status(200).json(users);
});

module.exports = { registerUser, loginUser, allUsers };
