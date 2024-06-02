const mongoose=require("mongoose")

const {Schema,model}=mongoose;

const adminSchema=Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        // unique:true
    },
    Location:{
        type:String,
        required:true
    },
})


const admin = model("adminmodel",adminSchema )



module.exports=admin;


