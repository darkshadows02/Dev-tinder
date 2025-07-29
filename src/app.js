const express=require("express");
const app=express();

app.use("/test",(req, res)=>{
      res.end("hello i m from backend side")
})
app.use("/hello",(req, res)=>{
      res.end("hello how r u")
})

app.listen(3000, () => {
      console.log("my server is running on port on 3000....")
});