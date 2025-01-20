
import client from "../models/client.models.js";

import asyncHandler from "../utils/asyncHandler.js";


const clientInfo  =asyncHandler(async(req,res,next)=>{

    const {name,phonenumber,email,companyagencyname}= await req.body;

    console.log(name,phonenumber)

})
export default clientInfo