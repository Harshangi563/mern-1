const express=require("express");
const userSchema=require("../model/userSchema");
const mongoose=require("mongoose");

const userRoute=express.Router();
userRoute.get("/",(req,res)=>{
    userSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
 })
 userRoute.route("/update-user/:id")
 .get((req,res)=>{
     userSchema.find(mongoose.Types.ObjectId(req.params.id),
     (err,data)=>{
         if(err)
             return err
         else
             res.json(data)
     })
 })
 .put((req,res)=>{
     userSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
     {$set:req.body},
     (err,data)=>{
         if(err)
             return err
         else
             res.json(data)
     })
 })
 
 userRoute.delete("/delete-user/:id",(req,res)=>{
    userSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
        }
    )
})




module.exports=userRoute;