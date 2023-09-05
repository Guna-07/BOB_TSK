import Admin from "../models/Admin.js";
import User from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const getAdmin = async (req, res, next) => {
  let admin;
    try{
        admin = await Admin.find();
    } catch(err) {
        return console.log(err);
    }

    if(!users){
        return res.status(500).json({message: "Unexpected Error Occured"});
    }

    return res.status(200).json({ admin });
};

export const signup = async(req, res, next) => {
    const { email, password } = req.body;
    if(!email.trim()==="" && !password.trim()==="") {
       return res.status(422).json({ message:"Invalid Input" });
    }

    const hashedPassword = bcrypt.hashSync(password);
    let admin;
    try { 
        admin = new Admin({ email, password: hashedPassword });
        admin = await Admin.save();//to save doc
    }catch (err) {
       return console.log(err);
    }
    if(!user){
        return res.status(500).json({message: "Unexpected Error Occured"});
    }
    return res.status(201).json({ admin });

};



