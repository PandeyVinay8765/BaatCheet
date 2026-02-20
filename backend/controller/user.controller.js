import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenandCookie from '../jwt/generateToken.js'

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
if(newUser){
    createTokenandCookie(newUser._id,res);
res.status(201).json({success:"New User Added SuccessFully",newUser});
}
}catch(err){
console.log(err);
console.log("Contact Author :Vinay Pandey internal server error")
res.status(500).json({error:"Something Went Wrong"})
}

};
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await User.findOne({email})
        let isMatch = false;
        if(user){
            isMatch= await bcrypt.compare(password,user.password)
          
        }
        if(!user||!isMatch){
            return res.status(401).json({error:"Invalid User Sign Up First"});
        }
        createTokenandCookie(user._id,res);
        res.status(200).json({message:"User Logged in Successfully",user:{
            _id:user._id,
            fullname:user.fullname
            ,email:user.email
        }})
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"internal Server Error"});
    }
}
export const logout=async(req,res)=>{
try{
res.clearCookie('jwt');
res.status(201).json({message:"Logout SuccessFully"})
}
catch(err){
    console.log(err);
    res.status(500).json({error:"Internal Server Broken"})
}
}