const user2Model = require("../models/user2Model");

const jwt = require("jsonwebtoken")

const user4= async function(req,res){
    let  data =  req.body
    let savedData= await user2Model.create(data)
    res.send({ message:savedData})
}

const loginDetails= async function(req,res){
    const{ emailId, password} = req.body

    let data= await user2Model.find({emailId:emailId, password:password})

    if(!data){
        res.send({message:"user is not logined"})
    }
    
    let userId= req.params.userId.toString()
    

    const token = jwt.sign({userId:userId,hello:"done"},"ali-abbas-backend")

    res.send({token:token})


    
    
    
}


const authenticate= async function(req, res){
    let userId= String(req.params.userId)
   // let user= await user2Model.findById(userId)
    //let data= user.posts
    let update= await user2Model.updateOne({userId:userId},{$push:{posts:["hello brother","yes"]}})
    let update2=await user2Model.findOneAndUpdate
    ({_id:userId},{$set:{isDeleted:true}},{new:true})
    let user= await user2Model.findById(userId)
    res.send({user:update2})
}

const Content = async function (req, res){
    let userId= (req.params.userId)
    let deleteContent = await user2Model.findOneAndUpdate
    ({_id:userId},{$set:{isDeleted:true}},{new:true})
    //let user= await user2Model.findById(userId)
    res.send({user:deleteContent})

}


module.exports.Content= Content
module.exports.authenticate= authenticate
module.exports.loginDetails= loginDetails

module.exports.user4 = user4