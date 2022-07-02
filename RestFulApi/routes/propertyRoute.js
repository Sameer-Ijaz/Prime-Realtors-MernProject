
const express = require("express");
const Router = express.Router();
const auth = require("../middlwares/auth");
const adminAuth = require("../middlwares/adminAuth");
const User = require("../models/user");
const Property = require("../models/property");
Router.use(express());
Router.use(express.json());



// Creating Routes

// Route For Seeing All Records
Router.get("/listing", async(req,res)=>{
    await console.log(req.user);
    const propertyList = await Property.find();
      res.send(propertyList);
      console.log(propertyList);
});

// Route For Submitting 
Router.post("/listing",async (req,res)=>{
    const list = new Property({
        PropertyName:req.body.name,
        PropertyPrice:req.body.price,
        PropertyCity:req.body.city,
        PropertyBed :req.body.bed,
        PropertyBath : req.body.bath
    });
    console.log(req.body);
    try{
        await list.save();
    }
    catch(err){
        console.log(err);

    }
    res.send("Hello");
});

// Route For Getting A Specific Record

Router.get("/listing/:id",async(req,res)=>{
    const getlist = await Property.findById(req.params.id);
    res.send(getlist);
})

// Route For Deleting A Record
Router.delete("/listing/:id",async(req,res)=>{
   const removedListing = await Property.findByIdAndDelete({_id:req.params.id});
   res.send("");
    
})

// Update

Router.put("/listing/:id",async(req,res)=>{
    const getproduct = await Property.findById(req.params.id);
    
        getproduct.PropertyName=req.body.name,
        getproduct.PropertyPrice=req.body.price,
        getproduct.PropertyCity=req.body.city,
        getproduct.PropertyBed =req.body.bed,
        getproduct.PropertyBath = req.body.bath
    console.log(req.body);
    try{
        await getproduct.save();
    }
    catch(err){
        console.log(err);

    }
    res.send("");
});

module.exports = Router;