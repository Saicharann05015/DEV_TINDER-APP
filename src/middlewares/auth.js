const auth = (req,res,next)=>{
    console.log("this is the middle ware of the auth go ")
    let user = "token";
    let isTruth = user === "token";
    if(!isTruth){
        res.send("user not authorized")
    }

    next();

}

module.exports = auth;
