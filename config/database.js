const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=async()=>{
    await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("DB Connection success");})
    .catch((e)=>{
        console.log("Error during DB Connection");
        console.log(e.message);
        process.exit(1);
    })
}

module.exports=dbConnect;