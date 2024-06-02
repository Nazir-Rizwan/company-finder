const express=require('express');
const routers= express.Router();

const tt=require('../middlewares/AuthMiddleware');

const {register,login,logout}=require('../controllers/authController');

routers.post('/register',register);

routers.post('/login', login);
routers.post('/logout' ,logout);

module.exports=routers;
// export default routers;