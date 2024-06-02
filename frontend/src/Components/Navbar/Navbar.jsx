import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const links =[
    {
        id:1,
        link:'Home',
    },
  ]

  return (
    <>
<div className=' flex items-center justify-between w-full h-20 p-4 bg-black  text-white '>

<h1 className='font-signature text-2xl ml-1'>Company Finder</h1>

<ul className="hidden md:flex gap-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
            text-[#9ca3af] hover:scale-105 duration-200">
            <NavLink to="/">
<a>{link}</a>
  </NavLink>
          </li>
        ))}
      </ul>
      {/*  for cart  */}
<div className="hidden  md:flex items-center justify-between gap-4 cursor-pointer">
<button className="bg-blue-600 px-3 py-2 rounded">
<NavLink to="/login">
Login
  </NavLink>
</button>
 {/* <div className="">
    <FaCartArrowDown size={30}/>
    </div> */}
</div>

<div onClick={()=>setnav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
  
{nav?  <FaRegTimesCircle size={50}/> :<FaBars size={35}/>}
</div>


{
  nav&& (
    <ul className='flex flex-col 
justify-center items-center absolute top-20 left-0 w-full h-[90vh]
 bg-black '>
 {
    links.map((value)=>{
        return(
        <li  key={value.id} className='text-[#9ca3af] capitalize cursor-pointer px-4 py-4 text-4xl'>
   
   
<NavLink to="/">
<a>{value.link}</a>
  </NavLink>

        </li>
        )
    })
  }
{/*  for last cart mobile responsive  */}
<div className="mt-10 flex flex-col items-center justify-between gap-5  ">
<button className="bg-blue-600 px-6 py-4 rounded-lg text-3xl my-2">
  <NavLink to="/login">
Login
  </NavLink>

</button>


</div>

</ul>
  )




}



</div>



    </>
  );
};

export default Navbar;
