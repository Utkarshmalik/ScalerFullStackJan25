const UserModel = require("../Model/user.model");
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');


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

        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);


        req.body.password = hashedPassword;


        const newUser = new UserModel(req.body);

         await  newUser.save();

         return res.status(201).send({success:true,message:"Registration Successful, Please login"});


    }catch(err){
        return res.status(500).send({message:"Internal Server Error"})
    }


}


const onLogin = async (req,res)=>{

    const {email, password} = req.body;


    console.log(email);
    console.log(password);

    if(!email || !password){
        return res.status(400).send({success:false,message:"Either of Email/Password is missing!"});
    }

    try{

        const existingUser = await UserModel.findOne({email:email});

        
        if(!existingUser){
            return res.status(404).send({success:false, message:`User with email and password doesnot exists`});
        }
    

        const hashedCorrectPassword = existingUser.password;

        const isPasswordValid = bcrypt.compareSync(password, hashedCorrectPassword);


        if(!isPasswordValid){
            return res.status(400)
            .send({success:false, message:`Sorry! Invalid Password entered!`});
        }

        //generate a new JWT and send it back to a client 
        const token = jwt.sign({userId:existingUser._id},process.env.SECRET_KEY);


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

const getCurrentUser = async (req,res)=>{

    const token = req.headers['access-token'];

    if(!token){
        return res.status(400).send({message:"JWT token is not passed"});
    }

    jwt.verify(token,process.env.SECRET_KEY,async (err,payload)=>{

        if(err){
            return res.status(403).send({message:"You are not allowed to access! Invalid Token"});
        }
        

        const userId = payload.userId;


        const userResponse = await UserModel.findById(userId);

        const {_id, name, email, role} = userResponse;

        return res.send({
            _id,name,email,role
        });

    })


}



module.exports={
    onRegister,
    onLogin,
    getAllUsers,
    getCurrentUser
}