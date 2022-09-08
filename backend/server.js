const express = require("express");
const connectdb = require("./config/db");
const userRouter = require("./routes/UserRoute");
const chatRouter = require("./routes/chatRoute")
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();
connectdb();

dotenv.config()
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

app.get("/", (req, res) => {
  res.send("hey");
});
