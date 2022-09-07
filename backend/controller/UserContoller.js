const asyncHandler = require("express-async-handler");
const User = require("../model/UserModal");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All Fields");
  }
  const userExits = await User.findOne({ email });
  if (userExits) {
    res.status(400);
    throw new Error("User Already Exist");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res
      .status(200)
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: "user Created SuccesFully",
      });
  } else {
    res.send(400);
    throw new Error("User Not Found");
  }
});

module.exports = { registerUser };
