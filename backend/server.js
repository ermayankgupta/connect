const express = require('express')
const connectdb = require('./config/db')
const userRouter = require("./routes/UserRoute")
const app = express()
connectdb()

app.listen(5000, async ()=>{
  console.log(`server is running on 5000`)
})

app.use('/api/user',userRouter)

app.get("/",(req,res)=>{
  res.send("hey")
})