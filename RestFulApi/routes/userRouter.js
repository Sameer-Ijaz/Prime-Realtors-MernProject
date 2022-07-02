
const express = require("express");
const Router = express.Router();
const User = require("../models/user");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("config");

Router.use(express());
Router.use(express.json());




// Register Route
Router.post("/register", async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user) return res.status(400).send("User With Given Email Already Exists")
    user = new User(
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);
        res.send(user);

    try{
        console.log(req.body);
        await user.save();
    }catch(err){
        console.log(err)
    };
});


// Route For Logging In 

Router.post("/login", async (req,res)=>{
    let user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("User Not Found")
    let isValid = await bcrypt.compare(req.body.password,user.password);
    if(!isValid) return res.status(401).send("Invalid Password");
    let token = jwt.sign({_id:user._id,name:user.name},config.get("jwtPrivateKey"));
    res.send(token);
});





module.exports = Router;






