const jwt = require("jsonwebtoken");
const user2Model = require("../models/user2Model");

const loginDetails = async function (req, res,next) {
  
    let emailId = req.body.emailId
    let password= req.body.password
  
    let check = await user2Model.find({emailId:emailId, password:password});
    if(check){
        next()

    }else{
        res.send({message: "not a legitimate user"})
    }

}




const tokenDetails =  async function (req, res, next){
    let token= req.headers["x-auth-token"]
    if(token){
        console.log(token)
        next()
    }else{
        res.send({msg: "token is not present"})
    }


 

    
}

const tokenVerification = async function(req, res, next){
    let token= req.headers["x-auth-token"]
    let verification = jwt.verify(token,"wasim-backend-cohort")
    if(verification){
        next()
    }else{
         res.send({msg:"token is invalid"})
    }

}
module.exports. tokenVerification =  tokenVerification
module.exports.tokenDetails = tokenDetails
module.exports.loginDetails = loginDetails