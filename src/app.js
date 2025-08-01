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

//middlewares
/*
app.use("/admin", userAuth);

app.get("/admin/getauthdata", (req, res, next)=>{
      res.send("data sucessfully get")
})


app.get("/user", user_auth, (req, res, next)=>{
         res.send("all user data send")
}) 
*/

/*
   in route handler if they have 4 parameters then first would be
      errr, req, res, next
   if 3 then
      req, res, next
   if 2 then
      req, res

*/

app.get("/getUserData", (req, res)=>{
      try{
      //      throw new Error("jasdhgd")
           res.send("it is ok to send data")
      }catch(err){
            res.status(500).send("something went wrong")
      }
})

//one type of error handling
app.get("/getuserdata", (req, res)=>{
     throw new Error("woooo")
     res.send("user data send")
})
// this will handel all and also it is ths most efficent way
app.use("/",(err, peq, res, next)=>{
         if(err){
            res.status(500).send("something went wrong")
         } 
})
// genral use way using try catch way

 



 
  
 

app.listen(3000, () => {
      console.log("my server is running on port on 3000....")
});