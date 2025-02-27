const UserModel = require("../Model/user.model");
var jwt = require('jsonwebtoken');



const onRegister = async (req,res)=>{

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).send({sucess:false,message:"Missing Fields for Register"})
    }

    
    try{
        const existingUser = await UserModel.findOne({email:email});

        if(existingUser){
            return res.status(400).send({success:false, message:"User with this email already exists"});
        }

        const newUser = new UserModel(req.body);

         await  newUser.save();

         return res.status(201).send({success:true,message:"Registration Successful, Please login"});


    }catch(err){
        return res.status(500).send({message:"Internal Server Error"})
    }


}


const onLogin = async (req,res)=>{

    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).send({success:false,message:"Either of Email/Password is missing!"});
    }

    try{

        const existingUser = await UserModel.findOne({email:email});

        
        if(!existingUser){
            return res.status(404).send({success:false, message:`User with email ${email} doesnot exists`});
        }

        // Simplified password validation (assuming passwords are stored in plain text, which is not recommended)
        if(password !== existingUser.password){
            return res.status(400)
            .send({success:false, message:`Sorry! Invalid Password entered!`});
        }

        //generate a new JWT and send it back to a client 
        const token = jwt.sign({userId:existingUser._id},"iamasecretkey");


        return res.send({
            success:true,
            message:"You have successfully logged in",
            accessToken:token
        })


    }catch(err){
        return res.status(500).send({message:"Internal Server Error"})
    }



}


const getAllUsers = async (req,res)=>{
    try{

        const allUsers = await UserModel.find();

        return res.send({
            success:true,
            data:allUsers
        })

    }catch(err){
        return res.status(500).send({message:"Internal Server Error"})
    }

}



module.exports={
    onRegister,
    onLogin,
    getAllUsers
}