function adminAuth(req,res,next){
    if(req.user.role !="admin")
    return res.status(403).send("You Are Not Authorized");
    next();
}

module.exports = adminAuth;