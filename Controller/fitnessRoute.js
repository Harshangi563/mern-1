const express=require("express");
const fitnessSchema=require("../model/fitnessSchema");
const mongoose=require("mongoose");

const fitnessRoute=express.Router();


fitnessRoute.post("/create-fitness",(req,res)=>{
    fitnessSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

 fitnessRoute.get("/",(req,res)=>{
    fitnessSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
 })

 fitnessRoute.route("/update-fitness/:id")
 .get((req,res)=>{
     fitnessSchema.find(mongoose.Types.ObjectId(req.params.id),
     (err,data)=>{
         if(err)
             return err
         else
             res.json(data)
     })
 })
 .put((req,res)=>{
     fitnessSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
     {$set:req.body},
     (err,data)=>{
         if(err)
             return err
         else
             res.json(data)
     })
 })
 
 fitnessRoute.delete("/delete-fitness/:id",(req,res)=>{
    fitnessSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
        }
    )
})




module.exports=fitnessRoute;
