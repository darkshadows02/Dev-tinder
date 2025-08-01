const userAuth=(req, res, next)=>{
    const token="xyzz";
     const  isAdminAuthorised= (token==="xyz");
     console.log(isAdminAuthorised)
     if(!isAdminAuthorised){
       res.status(401).send("unauthorized request")
     }else{
        //  console.log("suraj kumar")
         next();
     }
}
const user_auth=(req, res, next)=>{
    const user_token="hrx";
    const user_auth=(user_token=="hrx");
    if(!user_auth){
        res.status(404).send("user is not authorized");
    }else{
        next();
    }
}
module.exports={
    userAuth, 
    user_auth
}
