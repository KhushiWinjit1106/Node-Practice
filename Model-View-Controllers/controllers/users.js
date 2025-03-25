const User = require("../Models/users")


async function handleGetAllUsers(req,res) {
    const alldbUsers = await User.find({});
    return res.json(alldbUsers);
}

async function GetUserById(req,res) {
    const id = req.params.id;
    const user = users.find(user=> user.id == id);
    if(!user){
        return res.status(404).send("User not found");
    }
    return res.json(user);
}

async function UpdateusserbyId(req,res){
    return res.json({status:"Pending"});
}


async function CreateUser(req,res){
    const body = req.body;
    if(
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body ||
        !body.gender
    ){
        return res.status(400).json({message : "Bad request"});
    }

    const result = await User.create({
        firstName : body.first_name,
        lastName :body.last_name ,
        email : body.email ,
        gender : body.gender,

    });

    console.log(result);
    return res.status(201).json({msg : "Sucessfull"})
}

module.exports ={
    handleGetAllUsers,
    GetUserById,
    UpdateusserbyId,
    CreateUser,
}