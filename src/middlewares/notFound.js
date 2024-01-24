
const notFoundHanlder = (req,res,next)=>{
    res.status(404),json({message:"not fount"})
}

module.exports =notFoundHanlder;

