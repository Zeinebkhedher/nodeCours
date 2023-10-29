//imports
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const taskRouters = require ("./routers/task")
const bookRouters = require ("./routers/book")
const userRouter = require("./routers/user")
const authorRouter = require("./routers/author")
//mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/test",
{useNewUrlParser : true,useUnifiedTopology : true})
.then(()=> console.log("Connexion à mongoDB reussite"))
.catch((e)=> console.log("connexion à mongodb échouée",e))



app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Acces-Control-Allow-Origin", "*");
    res.setHeader(
      "Acces-Control-Allow-Header",
      "Origin, X-Requested-With, Content, Accept, Content-Type ,Authorization"
    );
    res.setHeader(
      "Acces-Control-Allow-Methods",
      "GET, POST, PUT , DELETE, PATCH, OPTIONS"
    );
    next();
  });


//Routers   
app.use("/api/tasks", taskRouters)
app.use("/api/books", bookRouters)
app.use("/api/auth", userRouter)
app.use("/api/authors", authorRouter)



module.exports = app; 





















