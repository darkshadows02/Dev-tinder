const express=require("express");
const app=express();
const {userAuth, user_auth}=require("./middlewares/auth")

//  app.use("/test", [(req, res, next)=>{
        
//       console.log("first router....")
//       next();
//       res.send({firstname:"suraj", lastname:"kumar"});
       
//  },
//  (req, res)=>{
//       // next();
//       res.send({firstname:"deeapk", lastname:"kumar"});
      
// }],
// (req, res)=>{
//       res.send({firstname:"suraj", lastname:"kumar"});
      
// },
// )

app.use("/admin", userAuth);

app.get("/admin/getauthdata", (req, res, next)=>{
      res.send("data sucessfully get")
})

app.get("/user", user_auth, (req, res, next)=>{
         res.send("all user data send")
}) 

 
  
 

app.listen(3000, () => {
      console.log("my server is running on port on 3000....")
});