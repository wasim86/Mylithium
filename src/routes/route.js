const express = require('express');
const router = express.Router();


//1
    router.post("/sol1", function (req, res) {
        let input =[1,2,3,5,6,7]
        let N = input.length+1
        let first = input[0]
        let last =input[input.length-1]
        var sum=N*(first+last);
        sum=sum/2;
        var output= 0;
        
        for (var i = 0; i < input.length; i++) {
          output=output+input[i];
        }
        let missingNumber=sum-output
        console.log(missingNumber)
        res.send({data:missingNumber})
        
    })

   
    
// 02
    router.get("/sol2", function(req, res){
        let input =[22,23,24,25,26,28]
        let N = input.length+1
        let first = input[0]
        let last =input[input.length-1]
        var sum=N*(first+last);
        sum=sum/2;
        var output= 0;
        
        for (var i = 0; i < input.length; i++) {
          output=output+input[i];
        }
        let missingNumber=sum-output
        console.log(missingNumber)
        res.send({data:missingNumber})
        
        
    
    })
    
    // 3
    const playerObject=[ {

        name: "manish",
        dob: "1/1/1995",
        gender: "male",
        city: "jalandhar",
        sports: [
        "swimming"
        ]
        },
        { name: "ayush",
          dob: "1/1/2000",
    
        }]
    
    // soln
    router.post("/players", function(req, res) {
        let newData=req.body
       
        
        for (let i = 0; i < playerObject.length; i++) {
            const element = playerObject[i];
            if(element.name==newData.name){
                console.log("person exist")
                res.send("person alrdy existed")
            }
            
            
        }
        playerObject.push(newData)
    
    
        
    console.log(playerObject)
    res.send({playerObject , status: true})
    
    })
    

   


    





module.exports = router;