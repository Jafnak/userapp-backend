const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { usermodel } = require("./models/user")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Jafna02:jafna9074@cluster0.icijy.mongodb.net/userappDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/login",(req,res)=>{
    res.send("hello")
})

app.post("/signup",(req,res)=>{
    let input = req.body
    let user = new usermodel(input)
    user.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("server started")
})