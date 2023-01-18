const mongoose=require("mongoose")

const Schema= new mongoose.Schema({
    id:Number,
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:String,
    gender:{type:String,enum:["Male","Female"],required:true},
    age:{type:Number,min:20,max:50,required:true}
    
    })
     const Model=mongoose.model("user",Schema)

     module.exports=Model