 const express=require("express");
 const app=express();

 // we r sending incoming request to the server
 // it is responce handelar
 
 app.use("/user",(req, res, next)=>{
        next();
      // res.send("handling the route user 1")
},
(req, res, next)=>{
        next();
      // res.send("handling the route user 2")
},
(req, res, next)=>{
      // res.send("handling the route user 3")
        next();
},
(req, res, next)=>{
      res.send("handling the route user 3")
}
)
 
app.get("/user", (req, res)=>{
         res.send({firstname:"suraj", lastname:"kumar"})
})
app.post("/user", (req, res)=>{
        res.send("data sucessfully save to the database")
})
app.delete("/user", (req, res)=>{
         res.send("data deleted sucessfully");
})
// if i put this on top then it will show for all http request
 

 // this is the port where application will run
 app.listen(3000, ()=>{
       console.log("server is hosted on port 3000")
 });
