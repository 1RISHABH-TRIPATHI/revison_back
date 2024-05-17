const express=require('express');
const router=express.Router();
const Users=require('../model/userName');
router.get('/users',async(req,res)=>{
    try {
        const response=await Users.find();
        res.status(200).json(response);
    } catch (error) {
        console.log('users router error',error);
        res.status(501).json({error:'Internal server error '});
    }
});
router.post('/users',async(req,res)=>{
    try {
        const postData=req.body;
        const newUsers=new Users(postData);
        const response=await newUsers.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log('users router error',error);
        res.status(501).json({error:'Internal server error '});
    }
});
router.patch('/users/:id',async (req,res)=>{
       try {
         const id=req.params.id;
         const updateData=req.body;
         const response= await Users.findByIdAndUpdate(id,updateData,{new:true,runValidators:true});
         if(!response)
             {
                 return res.status(400).json({error:'item not found '})
             }
         console.log(`${id} data update successfully `);
         res.status(200).json(response);
       } catch (error) {
        console.log('put error ',error);
        res.status(501).json({error:'Internal server error'})
       }
});
router.delete('/users/:id',async (req,res)=>{
    try {
      const id=req.params.id;
      const response= await Users.findByIdAndDelete(id);
      if(!response)
          {
              return res.status(400).json({error:'item not found '})
          }
      console.log(`${id} data delete successfully `);
      res.status(200).json(response);
    } catch (error) {
     console.log('put error ',error);
     res.status(501).json({error:'Internal server error'})
    }
})
module.exports=router;