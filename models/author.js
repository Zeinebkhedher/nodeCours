const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    lastname : {type: String, required : true},
    firstname : {type : String, required: true}, 
    nationality : {type: String , required: true}
})


module.exports = mongoose.model("author", authorSchema)
