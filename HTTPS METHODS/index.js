//HTTP GET : getting datat from the server (by default)

//HTTP post :- when we have to send the data and mutate that then we do a post req

//HTTP Put :- when we have to update the data

//http delete :- when we have to delete the data

//HTTP patch :- when we have to update the data partially


const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req , res)=>{
    if(req.url === '/favicon.ico'){
        return res.end();
    }

    const log = `${Date.now()} : ${req.url}: ${req.method} New req recieved\n` ;
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);

    fs.appendFile('log.txt' , log , (err , data)=>{

        switch(myUrl.pathname) {
            case '/' : 
            if(req.method==='GET'){
                res.end("HOMEPAGE");
            }
            break;

            case '/about' :
            const username = myUrl.query.myname;
            res.end(`About page of ${username}`);
            break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end("here are the reults for " + search);
                break;

                //HTTPS METHOD
            
            case '/signup' :
                if(req.method==='GET') res.end("this is a signup page");
                else if(req.method==='POST'){
                    res.end("sucess");
                }

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