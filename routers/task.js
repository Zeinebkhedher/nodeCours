//imports
const express = require ("express")
const router = express.Router()
const taskController = require("../contollers/task")
const auth = require("../middlewares/auth")

//routers
router.get("/",auth.loggedMiddleware, taskController.fetchTasks) 
router.get("/:id",auth.loggedMiddleware,taskController.getTaskById)   
router.post("/", auth.loggedMiddleware,taskController.addTasks);    
router.patch("/:id", auth.loggedMiddleware,taskController.updateTask);
router.delete("/:id", auth.loggedMiddleware,taskController.deleteTask);
    
module.exports = router;