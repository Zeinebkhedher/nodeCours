const jwt = require("jsonwebtoken")


module.exports.loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
    const userId = decodedToken.userId
    const userRole = decodedToken.userRole

    req.auth = {
      userId: userId,
      userRole: userRole    
    }
    next()
  } catch (error) {
    res.status(401).json({ error })
  }
}

module.exports.updateMiddlware = (req, res, next) =>{
 /*
 User.findOne({_id: userId}).then ((response)=>{
  if (response) {
    req.auth= {
      userId: userId,
      role : response.role 

    }next()
    else {
      res.status(401).json(error:"user doesn't exist")
    }
  }

 })
 .catch ((error)=>{
  res.status(500).json({error: error.message})
 })
 */
  try {   
    if (req.auth.userRole === "admin"){
      next()
    }
    else {
      res.status(403).json({error: "no access to this route"})
    }
  } catch (error) {
    res.status(403).json({ error })
  }


}