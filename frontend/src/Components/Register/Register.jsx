import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import instance from '../../service/axiosInstance';
import './Register.css';
import { NavLink } from "react-router-dom";


const Register = () => {
  
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password:""
  });
 
  const [errors, setErrors] = useState({});
 
  const validateForm = () => {
    
    let isValid = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};
    
    if (!register.username.trim()) {
     
      isValid = false;
      newErrors.username = 'Username is required';
    }

    // Validate email
    if (!register.email.trim()) {
      isValid = false;
      newErrors.email = 'Email is required';
    } 
    else if (!regex.test(register.email)) {
      isValid = false;
      newErrors.email = 'Invalid email format';
    }

    // Validate password
    if (!register.password.trim()) {
      isValid = false;
      newErrors.password = 'Password is required';
    } 
    // else if (formData.password.length < 6) {
    //   isValid = false;
    //   newErrors.password = 'Password must be at least 6 characters long';
    // }

    setErrors(newErrors);
    return isValid;
  };


  const handleChange=(e)=> {

    const name=e.target.name;
    const value=e.target.value;

    setRegister({
      ...register,
      [name]:value
    });
    
    // setuser({...user,[name]:value})
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    
    
  }

const handlesubmit=async(e)=>{
 
  e.preventDefault();
  try{

    if (!validateForm()) {
      toast.error("Plz filled All Record");
    }
   else{
 const registerUser=await instance.post('/register', register);
const  response=registerUser.data;
response.success?toast.success(response.message):toast.error(response.message);
if(response.success){
  // navigator()
}
}
  }
  catch(err)
  {

    console.log("Error frontend"+err)
  }

}


  return (      
<div className='container'>

        <form className='form' >
        <h1>Register To Company Finder </h1>

        <div className='form-input' >
<div className='form_div'>
 <input type='text' name="username" onChange={handleChange} value={register.username} placeholder='Enter Username' autoComplete='off'/>
 {errors.username && <span className="error">{errors.username}</span>}
</div>

<div className='form_div'>
  <input type="email" placeholder='Enter Email' name="email" onChange={handleChange} value={register.email} autoComplete='off' />
  {errors.email && <span className="error">{errors.email}</span>}
</div>

<div className='form_div'>
  <input type="password" placeholder='Enter Password' name="password" onChange={handleChange} value={register.password} autoComplete='off' />
  {errors.password && <span className="error">{errors.password}</span>}
</div>

</div>

{/* <button className='btn' >Sign in</button> */}
<input type='submit' className='btn' value="register" onClick={handlesubmit}></input>
<Toaster/>
<div className="navlink-url">
<p>Already have an account?    
  </p>
  <NavLink to="/login">
  <a>Login Now</a>
  </NavLink>
  </div>
        </form>
        
</div>
    
  )
}

export default Register