const user = require("../models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification =async (req, res,next) => {
   const token =req.cookies.token
   try{

   
  if (!token) {
    return res.status(401).json({ success: false ,message:"unAuthorized ! No token Provided"});
  }
const decoded = jwt.verify(token, process.env.TOKEN_KEY);
   console.log(decoded);
const find=await user.findById(decoded.id);
if(!find)
  {
    return res.status(401).json({ success: false ,message:"User Not Found"});
   
  }
if(find.role!='admin')
  {
    return res.status(401).json({ success: false ,message:"Unauthorized !No acces of role provided"});
  }

req.user = find;
console.log(find);
   // Move to the next middleware
   next();
}
catch(err)
{
    console.log("Error verify to token middlers");
}
   
}

module.exports=userVerification;
    // , async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })




// const jwt=require("jsonwebtoken")
// const user=require("../model/Register")



// const authenticate=async(req,res,next)=>{
    
//     try{
// const token= req.cookies.token;
// console.log(token)

// const verifytoken=jwt.verify(token,"mynameisnazir")

// console.log(verifytoken)

// if (!token) {
//         return res.status(401).json({ msg: 'No token, authorization denied' });
//       }




//  if(!rootuser) {throw new Error("User not found")}
//  req.token=token;
//  req.rootuser=rootuser;
//  req.userID=rootuser._id;



// const rootuser= await user.findOne({_id:verifytoken._id ,"tokens.token":token})
// if(!rootuser) {throw new Error("User not found")}
// req.token=token;
// req.rootuser=rootuser;
// req.userID=rootuser._id;


// // next();
// }
// catch(err)
// {
//   return  res.status(401).send("Unable to authenticate No Token")
//     console.log(err)
// }

// next();

// }

// module.exports=authenticate;