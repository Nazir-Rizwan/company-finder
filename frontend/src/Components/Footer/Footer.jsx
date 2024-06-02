import React from 'react'
import { FaFacebook,FaLinkedin,FaGithub,FaTwitter }  from "react-icons/fa";
import './footer.css';

const socialLinks=[
    {
        href:'https://www.facebook.com/nazir.rizwan/',
        icons:<FaFacebook size={32}/>
    },
    {
     href:'https://www.linkedin.com/in/nazir-rizwan/',
     icons:<FaLinkedin size={32}/>
    }
    ,
    {
      href:'https://github.com/Nazir-Rizwan',
      icons:<FaGithub size={32}/>
    }
]

const Footer = () => {
  return (
    <footer className='footer'>
        
        {/*  icons style dive  */}
        <div className='icon-list'>
{socialLinks.map((value,index)=>{
const {href,icons}=value;
return(
    <>
    <a key={index} href={href} target="_blank" className='icon'>{icons}</a>
    </>
)
})}

        </div>
        {/*  copyright style */}
        <div className='copyright'>
            <p>  Company Finder &copy;2024; <span style={{color:"#D3CECE"}}>Developed By Nazir</span> </p>
        </div>
    </footer>
  )
}

export default Footer