import User from "../models/userModel.js";

export const loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const signupUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;
    // if(!fullName || !email || !password || !confirmPassword || !gender){
    //   return res.status(400).json({message:"All fields are required"})
    // }
    if(password !== confirmPassword){
      return res.status(400).json({message:"Passwords do not match"})
    }
    // if(password.length < 6){
    //   return res.status(400).json({message:"Password must be at least 6 characters long"})
    // }
    // if(!email.includes("@gmail.com")){
    //   return res.status(400).json({message:"Invalid email"})
    // }

    const user = await User.findOne({username});
    if(user){
      return res.status(400).json({message:"User already exists"})
    }
    
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
