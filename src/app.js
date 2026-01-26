const express = require("express");
const app = express();


app.get("/Get",(req,res)=>{
    res.send({name:"saicharan",class:"B.Tech"})
})

app.post("/Post",(req,res)=>{
    res.send("hello user your data put in the database");

})

app.delete("/Delete",(req,res)=>{
    res.send("hello user your sucessfully deleted")

})

app.listen(3000,()=>{
    console.log("server is running on the port number 3000")

})