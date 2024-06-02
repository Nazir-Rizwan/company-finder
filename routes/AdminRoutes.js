const express=require('express');
const adminRouter= express.Router();
const adminController=require('../controllers/Admin');
const userVerification=require('../middlewares/AuthMiddleware')

const {getCompany,addCompany}=adminController;
adminRouter.post('/addCompany',userVerification,addCompany);
adminRouter.get('/getCompany',getCompany);



module.exports=adminRouter;

