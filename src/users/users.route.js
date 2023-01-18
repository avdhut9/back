const express=require("express")
const Model=require("./users.model")

const app=express.Router()

app.get("/",async(req,res)=>{
    let users=await Model.find()

    res.send(users)
})
app.get("/:id",async(req,res)=>{
    let {id}=req.params

    let user=await Model.findById(id)
    if(user){
        res.send(user)
    }else{
        res.send("no user found")
    }
})
app.delete("/:id",async(req,res)=>{
    let {id}=req.params
  
    let user=await Model.findByIdAndDelete(id)
    res.send(user)
})
app.patch("/:id",async(req,res)=>{
   try{
    let {id}=req.params
    console.log(req.body)
      let user=await Model.findByIdAndUpdate(id,{...req.body},{new:true})
      res.send(user)
   }catch(e){
    res.send(e.message)
   }
})
app.post("/",async(req,res)=>{
   try{
    let user=await Model.create({...req.body})
    res.send(user)
   }catch(e){
res.status(404).send(e.message)
   }
})

module.exports=app