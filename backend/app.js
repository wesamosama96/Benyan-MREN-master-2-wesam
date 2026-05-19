//Dotenv
require("dotenv").config();

//express
const express =require("express");
const app =express();


//middleware json
app.use(express.json());


//connection DB

//Simple logger
if (process.env.NODE_ENV ==="dev"){
    app.use((req,res,next)=>{
console.log(`${req.method}${req.originalurl}`)
    next();
    })
    }

    //Test Route
    app.get("/test",(req,res)=>{
        res.json({msg: "Test Route"})
    });
    const connecteddb =require ("./config/db")
    connecteddb();


//port
const port= process.env.PORT || 3000;


//Run Server
app.listen(port ,()=>{
    console.log(`Server Is Running ${port}`)
})