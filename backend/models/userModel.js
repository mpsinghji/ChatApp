import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },
    profilePic:{
        type:String,
        default:""
    }

})
const User = mongoose.model("User",userSchema);
export default User;