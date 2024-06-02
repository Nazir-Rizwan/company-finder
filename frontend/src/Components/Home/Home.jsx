import React,{useState,useEffect} from 'react'
import './Home.css';
import instance from '../../service/axiosInstance';
import { MdContentCopy } from "react-icons/md";
import toast,{Toaster} from 'react-hot-toast';

const Home = () => {
  const [company, setCompany] = useState({});

  const Showdata=async()=>{
    await instance.get('/getCompany')
    .then(response => {
      setCompany(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the users!', error);
    });
    console.log(company)
  }

  useEffect(() => {
    Showdata(); 
  }, []);


 const handleCopy=(text)=>{
  navigator.clipboard.writeText(text)
toast.success("Successfully copied")
 }

  return (
    <>
    <div className='main'>
     {company!=undefined&&company.length>0?company.map((value,index)=>{
      return(
        <>
        <div className='card-inner' key={index}>
      <h3>{value.name}</h3>
      <div className='email-content'>
      <input type='text' value={value.email}></input> <MdContentCopy onClick={()=>handleCopy(value.email)} style={{cursor:"pointer"}} size={30}/>
      </div>
      <div> <span style={{textTransform:"capitalize", fontWeight:"bold"}}>{value.Location}</span></div>
      </div>
        </>
      )
     })
    :"Loading"
    } 
  

     

     
    </div>
    <Toaster/>
    </>
  )
}

export default Home