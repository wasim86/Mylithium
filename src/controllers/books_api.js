const { default: mongoose } = require('mongoose')
const book_model=require('../models/books_model')

const take_book=async function(req,res){
    const book_data=req.body
    await book_model.create(book_data)
    res.send({msg:'books details submit successfully--',status:true})
}

const get_data=async function(req,res){
    const find_data=await book_model.find()
    res.send(find_data)
}

module.exports.take_books=take_book
module.exports.get_data=get_data