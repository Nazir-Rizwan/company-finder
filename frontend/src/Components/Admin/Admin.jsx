import React,{useEffect, useState} from 'react'
import toast,{Toaster} from 'react-hot-toast';
import instance from '../../service/axiosInstance';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
 const [name,setName]=useState();
 const [email,setEmail]=useState();
 const [location,setLocation]=useState('lahore');



 const handlesubmit= async(e)=>{
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!name)
        {
            toast.error('Please enter Company Name')
            
        }
    if(!regex.test(email))
                {
                    toast.error('Please enter valid Email ')
                    
                }
   else if(!location)
                    {
                        toast.error('Please select Location')
                        
                    }

                  else 
                  {
                    console.log(name,email,location);
           const respose= await instance.post('/addCompany',{name,email,location},{ withCredentials: true });
           console.log(respose.data)
           
if(respose.data.success)
{
    toast.success(respose.data.message)
}
else{
  toast.error(respose.data.message)
}

                  }
 }

      
  return (
    <>
<div className='container'>

<form className='form' >
<h1>Admin Panel Screen </h1>

<div className='form-input' >
<div className='form_div'>
<input type='text' name="companyName" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Company Name' autoComplete='off'/>

</div>

<div className='form_div'>
<input type="email" placeholder='Enter Company Email' name="email" onChange={(e)=>setEmail(e.target.value)} value={email} autoComplete='off' />

</div>



<div className='form_select'>
<select  value={location} onChange={(e)=>setLocation(e.target.value)} defaultValue="lahore">
  <option   value="lahore" >Lahore</option>
  <option value="islamabad">Islamabad</option>
</select>
</div>


</div>

{/* <button className='btn' >Sign in</button> */}
<input type='submit' className='btn' value="register" onClick={handlesubmit}></input>
<Toaster/>
</form>

</div>



    </>
  )
}

export default Admin