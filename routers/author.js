//imports
const express = require ("express")
const router = express.Router()
const authorController = require("../contollers/author")
//routers

router.post("/", authorController.addAuthor)

module.exports= router