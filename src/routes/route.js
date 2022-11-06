const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const user2Controller= require("../controllers/user2Controller")
const middle= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
//getUserData
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)



// start 

router.post("/user4", user2Controller.user4)
router.post("/loginDetails/:userId", user2Controller.loginDetails)
router.get("/loginDetails/:userId",middle.authenticate,user2Controller.authenticate)
router.put("/loginDetails/:userId",middle.authenticate,user2Controller.authenticate)
router.delete("/loginDetails/:userId",middle.authenticate,user2Controller.Content)





module.exports = router;