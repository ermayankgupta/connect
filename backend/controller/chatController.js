const asyncHandler = require("express-async-handler");
const Chat = require("../model/ChatModal");

const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const isChat = await Chat.find({
    isGroup: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  }).populate("users", "-password");
  if (isChat) {
    res.json(isChat);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
    try {
      const createChat = await Chat.create(chatData);
      console.log(createChat);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
});

const fetchChat = asyncHandler(async (req, res) => {
  try {
    const chats = await Chat.find({users:{$elemMatch:{$eq:req.user._id}}})
    res.status(200).json(chats)
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = { accessChat,fetchChat };
