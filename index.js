require("dotenv").config()
const PORT=process.env.PORT||8080
const express=require("express")

const cors=require("cors")
const connect=require("./src/config/connection.js")
const userrouter=require("./src/users/users.route.js")
const app=express()


app.use(cors())
app.use(express.json())
app.use("/users",userrouter)




app.listen(PORT,async()=>{

let x=await connect()
console.log(`http://localhost:${PORT}`)
})