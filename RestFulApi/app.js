const express = require("express");
const  mongoose= require("mongoose");

var cors = require("cors");
const app = express();
usersRouter = require("./routes/userRouter");
listingroute = require("./routes/propertyRoute");
contactroute = require("./routes/contactroute");
app.use(express.json());
app.use(cors());
app.use("/api/users", usersRouter);
app.use("/api/",listingroute);
app.use("/api/",contactroute);





mongoose.connect("mongodb://localhost:27017/User").then(async ()=>{
    console.log("Connected To DB Succesfully");

}).catch(err=>{
    console.log("Error Connecting To Database");
});



// Listening

app.listen(8000);