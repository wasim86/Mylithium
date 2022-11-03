const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/middleware.js");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)


router.post("/createUser1", userController.createUser1)
router.post("/loginDetailsFurther",middleware.loginDetails ,userController.loginDetailsFurther)
router.get("/user1/:userId",middleware.tokenDetails,middleware.tokenVerification ,userController.tokenDetailsFurther)
router.put("/user1/:userId",middleware.tokenDetails,userController.updateUserData)
router.delete("/user1/:userId",middleware.tokenDetails,userController.deleteUserData)

module.exports = router;