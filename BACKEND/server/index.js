const http = require("http")
const fs = require("fs")
const myServer = http.createServer((req , res)=>{
    const log = `${Date.now()}:${req.method} , ${req.url} New req recieved \n`
    fs.appendFile("log.txt" , log , (err ,data) => {
        switch(req.url){
            case "/":
                res.end("Hello from server");
                    break
            case "/about":
                res.end("I am priyanshu");
                    break
            case "/signup":
                if(req.method === "GET") res.end("this is a signup form")
                else{
                    res.end("thankyou for signing up")
                }
            default:
            res.end("404 not found");
        }
    } )
    
});


myServer.listen(8000 , ()=> console.log("server started"))
