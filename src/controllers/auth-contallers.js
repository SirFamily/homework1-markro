exports.register = (req,res,next) =>{
    const {email ,password} = req.body
    res.json({email, password})
    
}

exports.login = (req,res,next)=>{
    res.json({message: "login"})
}

exports.forgetPassword = (req,res,next)=>{
    const {email}=req.body
    res.json({message: "forget password"})
}

exports.verifyForgetPassword = (req,res,next)=>{
    res.json({message: "verify forget password"})

}

exports.resetPassword = (req,res,next)=>{
    res.json({message: "reset password"})
}