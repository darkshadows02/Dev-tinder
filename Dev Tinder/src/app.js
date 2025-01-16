 const express=require("express");
 const app=express();

 // we r sending incoming request to the server
 // it is responce handelar
app.use((req, res)=>{
        res.send("my side this is konwn server")
})
app.use('test', (req, res)=>{
      res.send("hello from test server side... ")
})


 // this is the port where application will run
 app.listen(3000, ()=>{
       console.log("server is hosted on port 3000")
 });
