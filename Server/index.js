//creating our own server 

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req , res)=>{

    //we are creating a log to maintain a history when ever any req will come it will store it in the log file
    const log = `${Date.now()} : ${req.url}: New req recieved` ;
    fs.appendFile('log.txt' , log , (err , data)=>{

        switch(req.url) {
            case '/' : res.end("hello u are in a home page");
            break;

            case '/about' : res.end("hello u are in a about page");
            break;

            default : res.end("404 not found");
            break;
        }

        // res.end("hello from the server again");
    })
    
    console.log("\nnew req rec.");
    //it contains all the info it is like a obj
    console.log(req);
    res.end("hello from server");
});


myServer.listen(8000 , () => {
    console.log("server started")
});