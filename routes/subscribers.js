const express=require('express');
const router=express.Router();
const Subscriber=require('../models/subscriber')


//Getting all
router.get('/',async(req,res)=>{ 
  try{
      const subscribers=await Subscriber.find()
      res.json(subscribers)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})
//Getting one
router.get('/:id',(req,res)=>{
    res.send(req.params.id);
})
//Creating One
router.post('/',(req,res)=>{
    
})
//updating one
router.patch('/:id',(req,res)=>{
    
})
//Deleting one    
router.delete('/:id',(req,res)=>{
    
})
module.exports=router;
