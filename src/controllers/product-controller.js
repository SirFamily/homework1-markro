exports.getProductsLanding = (req,res,next)=>{
    res.json({message:"get product landing page"})
}

exports.getProducts = (req,res,next)=>{
    const {search,promot} = req.query
    res.json({search,promot})
}

exports.getProductsById =(req,res,next) =>{
    const {productId} = req.params
    res.json({productId})
}