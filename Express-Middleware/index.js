//middle wares are like plugins 
const fs = require("fs");
const express = require("express");
const users = require("./MOCK_DATA (1).json");

const app = express();
const PORT = 8000;


//midddleware plugins

app.use(express.urlencoded({extended : false}));

app.use((req,res,next)=>{
    console.log("hello from middleware");
    req.userName = 'khushirenu'
    next();
})

app.use((req,res,next)=>{
    console.log("hello from middleware 2" , req.userName);
    return res.end("hey");
    next();
})


//routes
app.get('/users' , (req,res)=> {
    const html = `
    <ul> ${users.map(user =>
        `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul> ` ;
    res.send(html);
})

//Rest api
app.get("/api/users" , (req,res)=> {
    return res.json(users);
})


//get user with user id (dynamic route)
app.get('/api/users/:id' , (req,res)=> {
    console.log("i m in route" , req.userName)
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    return res.json(user);
})

//Post - create new user .

app.post('/api/users' , (req,res)=> {
    // TODO : pENDING
    return res.json({status : "PENDING"})
})

app.patch('/api/users/:id' , (req,res)=> {
    // TODO : PENDING
    return res.json({status : "PENDING"})
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


//USE OF MIDDLEWARES
//1. WE CAN EXECUTE ANY CODE
//2. MAKE CHANGES TO THE REQUEST AND THE RESPONSE OBJECTS
//3. END THE REQUEST-RESPONSE CYCLE
//4. CALL THE NEXT MIDDLEWARE FUCNTION IN A STACK

