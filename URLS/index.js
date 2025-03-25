
const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req , res)=>{
    if(req.url === '/favicon.ico'){
        return res.end();
    }

    const log = `${Date.now()} : ${req.url}: New req recieved\n` ;
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);

    fs.appendFile('log.txt' , log , (err , data)=>{

        switch(myUrl.pathname) {
            case '/' : res.end("HOMEPAGE");
            break;

            case '/about' :
            const username = myUrl.query.myname;
            res.end(`About page of ${username}`);
            break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end("here are the reults for " + search);
                break;

            default : res.end("404 not found");
            break;
        }

    })
    
    console.log("\nnew req rec.");
    console.log(req);
    res.end("hello from server");
});


myServer.listen(8000 , () => {
    console.log("server started")
});