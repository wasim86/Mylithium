const express = require('express');
const router = express.Router();///test-you
const abc = require('../logger/logger')
const xyz =require('../util/helper')
const pqr =require('../validator/formatter')
const x=require('lodash')


router.get('/test-me', function (req, res) {
    pqr.trims()
    abc.myFunction()
 xyz.printDate()
 xyz.printMonth()
 xyz.printBatch()


 
 const allMonth =["January","February","March","April","May","June","July","August","September","October","November","December"]
 console.log(x.chunk(allMonth,4))
 
 const arr = [1,3,5,7,9,11,13,15,17,19]
 console.log(x.tail(arr,9)) 
 
 let a=[1,2]
    let b=[2,3]
    let c=[3,4]
    let d=[4,5]
    let e=[5,6]
    console.log(x.union(a,b,c,d,e))

    const object = [["horror","The Shining"],["darama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(x.fromPairs(object))
    res.send('My first ever api!')
    
    res.send('My first ever api!')

    
});

module.exports = router;

