import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import instance from '../../service/axiosInstance';
import './Login.css';;
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const Login = () => {
  
  const [register, setRegister] = useState({
    email: "",
    password:""
  });

  const [errors, setErrors] = useState({});


  const navigate = useNavigate()

  // axios.defaults.withCredentials = true;

  const validateForm = () => {
    
    let isValid = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};

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
 const registerUser=await instance.post('/login', register,{ withCredentials: true });
const  response=registerUser.data;
// localStorage.setItem('token', response.user.token);
localStorage.setItem('role', response.user.role);
console.log(response.user);
response.success?toast.success(response.message):toast.error(response.message);
if(response.success){
  // navigator()
 if(response.user.role=='admin')
  {
navigate('/admin')
  }
}
}
  }
  catch(err)
  {

    console.log("Error frontend "+err)
  }

}


  return (      
<div className='container'>

        <form className='form' >
        <h1>Login To Company Finder </h1>

        <div className='form-input' >

<div className='form_div'>
  <input type="email" placeholder='Enter Email' name="email" onChange={handleChange} value={register.email} autoComplete='off' />
  {errors.email && <span className="error">{errors.email}</span>}
</div>

<div className='form_div'>
  <input type="password" placeholder='Enter Password' name="password" onChange={handleChange} value={register.password} autoComplete='off' />
  {errors.password && <span className="error">{errors.password}</span>}
</div>

</div>

<input type='submit' className='btn' value="Login" onClick={handlesubmit}></input>
<Toaster/>
<div className="navlink-url">
<p>Not a member?    
  </p>
  <NavLink to="/register">
  <a>Signup Now</a>
  </NavLink>
  </div>
        </form>
        
</div>
    
  )
}

export default Login