const jwt = require("jsonwebtoken")

const getToken = (id)=>{
  return jwt.sign({id},process.env.SECRET_KEY,{
    expiresIn:'1d'
  })
}

module.exports = getToken