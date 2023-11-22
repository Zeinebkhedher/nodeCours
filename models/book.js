const mongoose = require("mongoose")
const author = require("./author")
const livreSchema = mongoose.Schema({
    
    title: {type: String, required: true}, 
    type : {type: String, required: true},
    price : {type : String, required: true}, 
    author : { type : [mongoose.Types.ObjectId], 
               ref :"author"}
   
})

module.exports = mongoose.model("Book", livreSchema)


//POPULATE