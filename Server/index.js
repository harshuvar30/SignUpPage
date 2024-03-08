const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require('./Routes/auth');
// const postsRoute = require('./Routes/posts')

var cors = require('cors')

app.use(cors()) 
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection seccessful")).catch((err)=>{
    console.log(err);
})
app.use(express.json());


app.use("/api/auth",authRoute)
// app.use("/api/posts",postsRoute)
app.listen(process.env.PORT || 5000,() =>{
    console.log("Backend server is running!")
})