const mongoose=require('mongoose')

const book_schema=new mongoose.Schema({
    book_name:{
        type:String,
        require:true
    },
    author_name:String,
    category:String,
    year:Number,
    your_name:{
        type:String,
    }
},{timestamps:true})

module.exports=mongoose.model('book',book_schema)