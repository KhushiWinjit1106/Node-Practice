const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const users = require("./MOCK_DATA (1).json");
const { type } = require("os");
const { MongoGCPError } = require("mongodb");
const app = express();
const PORT = 8000;

//connection of mongoose with node

mongoose.connect('mongodb://127.0.0.1:27017/khushi-app-1').then(()=>
console.log("mongodb connection done")).catch((err)=>console.log("mongo error" , err));
//schema 

const userSchema = new mongoose.Schema({
    firstName :{
        type :String,
        required:true,
    },
    lastName :{
        type :String,
    },
    email :{
        type :String,
        required : true,
        unique:true,
    },
    gender:{
        type :String,
    }
} , {timestamps: true});

const User = mongoose.model('user' , userSchema);


app.use(express.urlencoded({extended : false}));

app.use((req,res,next)=>{
    fs.appendFile(
        "log.txt",
        `\n${Date.now()} : ${req.ip} : ${req.method} : ${req.path}\n`,
        (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
            }
            next();
        }
    );
});

//Routes

app.get('/users' , (req,res)=> {
    const html = `
    <ul> ${users.map(user =>
        `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul> ` ;
    res.send(html);
})

app.get("api/users" , (req,res)=> {
    res.setHeader("x-myname" , "khushi-renu");
    return res.json(users);
});

app.route("/app/users/:id").get((req,res)=>{
    const id = req.params.id;
    const user = users.find(user=> user.id == id);
    if(!user){
        return res.status(404).send("User not found");
    }
    return res.json(user);
})
.patch((req,res)=>{
    return res.json({status:"Pending"});
})
.delete((req,res)=>{
    return res.json({status:"Pending"});
});

app.post("/api/users" , async(req,res)=>{
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

});

app.listen(PORT , ()=> console.log(`Server is running on port ${PORT}`));