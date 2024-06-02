const mongoose = require("mongoose");

const DBconnect=async()=>{
    try{
        mongoose.connect(process.env.DB).then(()=>console.log("successful"))
    
    }catch(e){
        console.log("DB connection error: " + e.message);
    }
}
module.exports= DBconnect;

