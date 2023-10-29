//imports
const express = require ("express")
const router = express.Router()
const userController = require("../contollers/user")

//routers
router.post("/signup", userController.signup)
router.post("/login", userController.login)


module.exports = router