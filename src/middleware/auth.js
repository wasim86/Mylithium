const jwt = require("jsonwebtoken")

const authenticate = function(req, res, next) {
    let token = req.headers["x-auth-token"]
    if (!token){
        res.send("token is not present")
    }

    let decode= jwt.verify(token, "ali-abbas-backend")
    if(!decode){
        res.send("token is not valid")
    }

    let userId= decode.userId
    let UserId= String(req.params.userId)

    if(!(userId=== UserId)){
        res.send("not correct")

    }


   

    next()
}





module.exports.authenticate= authenticate