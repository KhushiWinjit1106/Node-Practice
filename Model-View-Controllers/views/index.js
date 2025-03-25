const express = require("express");
const fs = require("fs");
const userRouter = require("../routes/users")
const {connectionMongodb} = require("./connection")
const {logReqRes} = require('../middlewares')


const app = express();
const PORT = 8000;

//connection of mongoose with node

connectionMongodb("mongodb://127.0.0.1:27017/khushi-app-1").then(()=>{
    console.log("mongodb connected");
})
app.use(logReqRes);
app.use(express.urlencoded({extended : false}));
app.use('/api/user' , userRouter);

app.listen(PORT , ()=> console.log(`Server is running on port ${PORT}`));