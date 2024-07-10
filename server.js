const express = require("express")
const mongoose = require('mongoose')
const bodyParser =require("body-parser");
const cors = require("cors");
const userSchema = require ('./model/userSchema');
const fitnessRoute = require("./Controller/fitnessRoute");
const userRoute = require("./Controller/userRoute");
const app = express()
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://fitness-tracker:13579@fitness-tracker.htydkeb.mongodb.net/fitness-tracker");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))

app.use("/fitnessRoute",fitnessRoute);
app.use("/userRoute",userRoute);

app.post("/login",(req,res) => {
    const {username,  password} =req.body;
    userSchema.findOne({username:username})
    .then(user => {
        if(user) {
            if(user.password ===password){
                res.json("success")

            } else{
                res.json('password is incorrect')
            }
        } else{
            res.json("no record existed")
        }
    })
})

app.post('/register',(req,res) =>{
    userSchema.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})







app.listen(4000,() => {
    console.log("server is running")
}
);