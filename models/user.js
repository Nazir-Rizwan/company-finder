const mongoose=require("mongoose")
const bcrypt = require('bcryptjs');

const {Schema,model}=mongoose;

const userSchema=Schema({
    
    email:{
        type:String,
        required:true
    },username:{
        type:String,
        required:true
        // unique:true
    },
    role:{
        type:String,
        enum:['admin', 'user'],
        default:"user"
    },
    password:{
        type:String,
        required:true
    },
})


const user = model("usermodel",userSchema )



module.exports=user;


