const admin=require('../models/Admin');



const addCompany=async(req,res)=>{
   
    const{name,email,location}=req.body;
  
    try{

        const exitadmin=await admin.findOne({name:name});
        if(exitadmin)
            {
                // 402 status code
                 res.json({success: false,message:"Company Already Register"});;   
            }
       else{

            const newCompany= admin({name:name,email:email,Location:location});
            console.log(newCompany)
            await newCompany.save();
           
            
     res.status(200).json({success: true,message:"Successfully registered Company"});
     }    

}
    catch(err)
    {

        return res.status(400).json({success:false, message:"internal server error "});
    }
    
    }


    const getCompany=async(req,res)=>{
        try{
        
            const allCompany= await admin.find();
         res.json(allCompany);
        }
        catch(err)
        {
            return res.status(400).json({message:"internal server error "});
        }
        
        }

 

module.exports={addCompany,getCompany};

