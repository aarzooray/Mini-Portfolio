

const asyncHandler = (fun)=>async (req,res,next,err)=>{
    try{
        await fun(req,res,next)
    }
    catch(err){
        res.status(err.code || 500)
        .json({
            success:false,
            message:err.message
        })
    }

}

export default asyncHandler