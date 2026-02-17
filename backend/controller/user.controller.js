import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup=async(req,res)=>{
    

const {fullname,email,password,confirmPassword}=req.body;
try{if(password!=confirmPassword){
    return res.status(400).json({error:"PassCode/Password not Match"});
}
const user=await User.findOne({email})
if(user){
    res.status(400).json({error:"User already Available/registered"})
    return

}
const hashPassword=await bcrypt.hash(password,10)
const newUser=await new User({
    fullname,email,password:hashPassword
})
await newUser.save();
res.status(201).json({success:"New User Added SuccessFully"})}catch(err){
console.log(err);
console.log("Contact Author :Vinay Pandey internal server error")
res.status(500).json({error:"Something Went Wrong"})
}

}