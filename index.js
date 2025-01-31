const express = require('express')
const app = express()

var PORT = 3000;
app.use(express.json())
require("./db")
const stumodel= require("./model/student")
app.listen(PORT,(req,res)=>{
    console.log(`server is listening in port ${PORT}`)
})


//api to add data base
app.post("/",(req,res)=>{
    try {
        stumodel(req.body).save()
        res.send("data added succesfully")
        
    } catch (error) {
      res.send(error)
    }
})

app.get('/',async(req,res)=>{
    try {
        var data=await stumodel.find()
        res.send(data) 
    } catch (error) {
        res.send(error)
    }
    
})

app.delete('/remove/:id',async(req,res)=>{
    try {
        await stumodel.findByIdAndDelete(req.params.id)
        res.send("item deleted")
    } catch (error) {
        res.send(error)
    }
})

app.put('/update/:id',async(req,res)=>{
    try {
        var data=await stumodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"updated successfully",data})
    } catch (error) {
        res.send(error)
    }
})