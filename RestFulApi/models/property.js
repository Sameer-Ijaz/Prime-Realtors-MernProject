const mongoose = require("mongoose");

const ListingScheme = mongoose.Schema({
    PropertyName:String,
    PropertyPrice:String,
    PropertyCity: String,
    PropertyBedPropertyBedPropertyBed : Number,
    PropertyBath : Number
});


module.exports = mongoose.model("Property",ListingScheme);