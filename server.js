const express = require('express');

const app=express();

require('dotenv').config();
const DBconnect =require('./utils/db');
const cors=require('cors');
const cookieParser = require('cookie-parser')



//  router file acess
const routeAuth=require('./routes/routers')
const routeAdmin=require('./routes/AdminRoutes');
const path = require('path');

//  DB function call
DBconnect();


//  middleware 
app.use(express.json());

//  middlewares 
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, //access-control-allow-credentials:true
  };
  app.use(cors(corsOptions));




//  For Authentication
app.use('/client',routeAuth)
//  For Show Data 
app.use('/client',routeAdmin)

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend","build")));
  app.use(express.static(path.resolve(__dirname,"frontend","build")));
  res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
})

app.listen(process.env.port,()=>console.log("runnig"))