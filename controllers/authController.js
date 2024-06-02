const user=require('../models/user');
const bcrypt=require('bcryptjs');

const createSecretToken=require('../utils/SecretToken');

const register=async(req,res)=>{

    const {username,email,password}=req.body;
    // if(!username||!email||!password){
    //     console.log(req.body)
    //      return  res.status(422).json({error:"Plz Filled All Record"})
    //     }    

    console.log(req.body)
    try{ 

    const exituser=await user.findOne({email:email});
    if(exituser){
        //  status code 400
       return res.status(200).json({success:false, message:"user Already Exits with email"});
    }
    else{
         //const salt=bcrypt.genSalt(10);

        const hasepassword=await bcrypt.hash(password,10);
        const newUser= user({username:username,email:email,password:hasepassword});
        await newUser.save();
        console.log("Registered user save success")
        console.log(newUser);
        res.status(200).json({success:true,message:"User Regiter successfully"});
    }
    }
    catch(err)
    {
        console.log("Error");
    }
   
}

const login=async(req,res)=>{

    const {email,password} = req.body;

    try{

    let finduser=await user.findOne({email:email});

    if(finduser)
        {
            const ispassword=await bcrypt.compare(password,finduser.password);
            if(ispassword)
                {
                   const token=createSecretToken(finduser._id);
               
                   res.cookie("token", token, {
                     withCredentials: true,
                     httpOnly: false,
                   });

                
                return res.status(200).json({success:true,message:"Successfully Login" ,user:finduser,token:createSecretToken(finduser._id)});
                }
                else{
                    return res.status(200).json({success:false,message:"invalid credentials"});
                }
                        
        }
    else{   
            // const token=jwt.sign({userId:user._id,email:user.email},process.env.Secret_Key,{expiresIn:'3d'});             
            //status code  404
            return res.status(200).json({success:false,message:"user Not found "}); 
}
        }
        catch(err)
        {
            console.log("Error from backend ");   
        }

}

const logout=async(req,res)=>{

    try{
        res.clearCookie('token');
        return res.status(200).json({success:true,message:"User Logout Successfully"}); 
    }catch(err)
    {
        console.log("Error from backend in logout Controllers");
    }
}

module.exports={register,login,logout};