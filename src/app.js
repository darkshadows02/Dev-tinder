const express=require("express");
const app=express();

app.use("/test",(req, res)=>{
      res.end("hello i m from backend side")
})

 app.get("/test", (req, res)=>{
       res.send({firstname:"suraj", lastname:"kumar"});
       
 })

 app.post("/test", (req, res)=>{
      res.send("data save sucessfully");
})

app.delete("/test", (req, res)=>{
      res.send("delete sucessfully");
})
 

app.listen(3000, () => {
      console.log("my server is running on port on 3000....")
});