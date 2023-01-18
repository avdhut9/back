const mongoose=require("mongoose")

const connect=async () =>{
    return   mongoose.connect("mongodb+srv://avdhut:avdhut%400511@cluster0.y514niy.mongodb.net/b20?retryWrites=true&w=majority")
     
  }
  module.exports=connect