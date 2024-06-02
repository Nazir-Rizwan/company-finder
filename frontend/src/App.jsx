
import Navbar from "./Components/Navbar/Navbar";
import ImageCar from "./Components/Carousel/ImageCar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Login from "./Components/Login/Login";
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";

function App() {

  axios.defaults.withCredentials = true;
  const role = localStorage.getItem('role');
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
     {  role=='admin'&&<Route  path="/admin" element={<Admin/>}/>}
       
      </Routes>
      <Footer/>
      </BrowserRouter>

      {/* <ImageCar/> */}
    </>
  )
}

export default App
