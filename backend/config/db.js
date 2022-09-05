const mongoose = require('mongoose')
const connectDB = async()=>{
  try{
    const conn = mongoose.connect("mongodb://127.0.0.1:27017/connectdb")
    console.log('db is connected')
  }catch(err){
    console.log(`Some error occured ${err}`)
  }
}
module.exports = connectDB