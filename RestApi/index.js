const express = require("express");
const users = require("./MOCK_DATA (1).json");

const app = express();
const PORT = 8000;

//Routes

// /users - html data 
// /api/users -- json data 


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


//we can also do it by this by adding route only once

// app.route('./api/users/:id').get((req,res)=> {
//     const id = req.params.id;
//     const user = users.find(user => user.id == id);
//     return res.json(user);
// }).put( (req,res)=> {
//     // TODO : PENDING
//     return res.json({status : "PENDING"})
// }).delete( (req,res)=> {
//     // TODO : PENDING
//     return res.json({status : "Deleting"})
// }).patch( (req,res)=> {
//     // TODO : PENDING
//     return res.json({status : "PENDING"})
// })



app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


