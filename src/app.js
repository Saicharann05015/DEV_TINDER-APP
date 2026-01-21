const express = require("express");
const app = express();


app.use("/hii",(req,res)=>{
    res.send("hello this is express from node_modules");

})

app.listen(3000,()=>{
    console.log("server is running on the port number 3000")

})