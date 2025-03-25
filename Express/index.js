//express is a frame work of node .
const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");
//express makes very easy to handle the routers and in a very clean way
const app = express();


app.get('/' , (req , res)=>{
    res.end("HOMEPAGE");
});

app.get('/about' , (req , res)=>{
    const username = req.query.myname;
    res.end(`About page of ${username}`);
});

//we can eaisly start the server by this .
app.listen(8000, ()=>{
    console.log("oops i m started")
})


//no need to start the function using the http we can eaisly start by the above method

// function Myhandler(req,res){
//     if(req.url === '/favicon.ico'){
//         return res.end();
//     }

//     const log = `${Date.now()} : ${req.url}: New req recieved\n` ;
//     const myUrl = url.parse(req.url , true);
//     console.log(myUrl);

//     fs.appendFile('log.txt' , log , (err , data)=>{

//         switch(myUrl.pathname) {
//             case '/' : res.end("HOMEPAGE");
//             break;

//             case '/about' :
//             const username = myUrl.query.myname;
//             res.end(`About page of ${username}`);
//             break;

//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end("here are the reults for " + search);
//                 break;

//             default : res.end("404 not found");
//             break;
//         }

//     })
    
//     console.log("\nnew req rec.");
//     console.log(req);
//     res.end("hello from server");

// // }

// const myServer = http.createServer(app);

// myServer.listen(8000 , () => {
//     console.log("server started")
// });



//EXPRESS VERSIONING 

//version
// ^4.21.2


// 1st part --> 4
// 2nd part -->21
// 3rd part -->2

// 3rd part --minor fixes
// (optional update)
// latest version -- 4.21.2


// 2nd part --21
// recommended bug fixed / security fixed.

// 3rd part -- major release 
// breaking update.
// should not be installed.
// if we are making a new application then we can update.

// carrot symbol -- major no. ko recoed 
// intsall all minor and recommended fixes but not major

