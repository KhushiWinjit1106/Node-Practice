//https headers are the headers that are sent to the server when a request is made. these headers are used to provide additional information to the server.


const fs = require("fs");
const express = require("express");
const users = require("./MOCK_DATA (1).json");

const app = express();
const PORT = 8000;

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


//Rest api
app.get("/api/users" , (req,res)=> {
    res.setHeader("x-Myname" , "khushi-renu") //custom headers
    //alwwys add x to a custom header
    return res.json(users);

})

//Status codes:-
// 100-199 (informational response)
// 200-299 (sucessfull response)
//300-399 (redirection message)
// 400-499 (client error)
// 500-599 (server error)


//sattus 200 - ok sucessful 
app.post('/api/users' , (req,res)=> {
    const body = req.body;
    users.push({...body , id: users.length+1});
    fs.writeFile("MOCK_DATA (1).json" , JSON.stringify(users) , (err,data)=>{
        return res.status(201).json({message : "User created"})
    });
});

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


