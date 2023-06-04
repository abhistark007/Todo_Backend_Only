const express=require("express");
const app=express();

require("dotenv").config();

// add middleware for body parsing
app.use(express.json());

const router=require("./routes/todo");

app.use("/api/v1/",router);

const dbConnect=require("./config/database");
dbConnect();

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started Successfully");
})