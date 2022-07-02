const mongoose = require("mongoose");

const ContactScheme = mongoose.Schema({
    Name:String,
    Email:String,
    Question: String,
   
});


module.exports = mongoose.model("Contact",ContactScheme);