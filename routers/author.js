//imports
const express = require ("express")
const router = express.Router()
const authorController = require("../contollers/author")
//routers

router.post("/", authorController.addAuthor)
//router.post("/", authorController.addAuthor)

router.get("/",authorController.fetchAuthors)
router.get("/:id", authorController.getAuthorById)
router.patch("/:id",authorController.updateAuthor)
router.delete(":id",authorController.deleteAuthor)

module.exports= router