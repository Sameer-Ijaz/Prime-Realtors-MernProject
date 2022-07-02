const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    name:String,
    email:String,
    password: String,
    role : {
        type : String,
        default : "user",
    },
   
});




module.exports = mongoose.model("user",userScheme);