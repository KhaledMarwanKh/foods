import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import validator from 'validator'

export const logoutUser = (req, res) => {
  res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "Strict" });
  res.status(200).json({ success: true, message: "تم تسجيل الخروج بنجاح." });
};
// login user
 const loginUser= async(req, res)=>{
    const {email, password}= req.body;
    try {
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"user Doesn't exist" })
        }
        const isMatch= await bcrypt.compare(password, user.password)

  if(!isMatch){
            return res.json({success:false, message:"Invalid credentials" })
        }
        const token=createToken(user._id);
        res.json({success:true, token})
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"error" })
    }
}
const createToken=(id)=>{
    return jwt.sign({id}, process.env.jWT_SECRET)
}
//register user 
const registerUser=async (req, res) => {
    const {name, password, email}= req.body;
    try {

        //checking is user already exists
        const exists=await userModel.findOne({email})

        if(exists){
            return res.json({success:false, message:"User already exists"})
        }
        //validating email format & strong password 
        if(!validator.isEmail(email))
        {
            return res.json({success:false, message:"Please enter a valid email "})
        }
        if(password.length<8){
            return res.json({success:false, message:"please enter strong password"})
        }
// hashing user password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

        // //hashing user password
        // const slat=await bcrypt.genSalt(10)
        // const hashedPassword= await bcrypt.hash(password, salt)

        const newUser= new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user=await newUser.save()
        const token= createToken(user._id)
        res.json({success:true,message:token})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

export  {loginUser, registerUser};