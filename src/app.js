const express=require("express");
const app=express();


 app.use("/test", [(req, res, next)=>{
        
      console.log("first router....")
      next();
      res.send({firstname:"suraj", lastname:"kumar"});
       
 },
 (req, res)=>{
      // next();
      res.send({firstname:"deeapk", lastname:"kumar"});
      
}],
(req, res)=>{
      res.send({firstname:"suraj", lastname:"kumar"});
      
},
)

  
 

app.listen(3000, () => {
      console.log("my server is running on port on 3000....")
});