require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');


const app=express();
app.use(bodyParser.json());
const db=require('./db'); // connct database
const routerUsers=require('./routers/users');

app.use('/',routerUsers)
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on Port ${port}`);
})