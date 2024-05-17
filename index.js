const express=require('express');
const app=express();

const PORT= 300;

app.listen(PORT,()=>{
    console.log(`listening on Port ${PORT}`);
})