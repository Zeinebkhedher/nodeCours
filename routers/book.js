//imports
const express = require ("express")
const router = express.Router()
const bookController = require("../contollers/book")

//routers
router.get("/", bookController.fetchBooks)   
router.get("/:id", bookController.getBookById)   
router.post("/", bookController.addBooks);  
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
    
module.exports = router;