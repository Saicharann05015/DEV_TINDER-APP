const express = require("express");
const app = express();



// params 

app.get("/product/:id/review/:rid",(req,res)=>{
    let {id,rid} = (req.params)
    res.send(`hello this product so & so ${id} ${rid}` )

})

app.get("/value",(req,res)=>{
  console.log(req.query);
  res.send("hello this is query params")
})


app.get("/product/:id",(req,res)=>{
    let {id} = req.params;
    let {en,val} = req.query;
    res.send(`this is the params ${id}, this is the query ${en,val}`);

})










// app.get("/log-in",(req,res)=>{
//     res.send("login Page")

// })

// app.get("/Get",(req,res)=>{
//     res.send({name:"saicharan",class:"B.Tech"})
// })

app.post("/Post",(req,res)=>{
    res.send("hello user your data put in the database");

})

app.delete("/Delete",(req,res)=>{
    res.send("hello user your sucessfully deleted")

})

app.listen(3000,()=>{
    console.log("server is running on the port number 3000")

})