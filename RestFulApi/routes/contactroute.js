const express = require("express");
const Router = express.Router();
const Contact = require('../models/contact');



Router.post("/Contacts",async (req,res)=>{
    const query = new Contact({
        Name:req.body.name,
        Email:req.body.email,
        Question:req.body.question
       
    });
    console.log(req.body);
    try{
        await query.save();
    }
    catch(err){
        console.log(err);

    }
    res.send("")
});

module.exports = Router;