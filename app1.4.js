
var http = require('http')

http.createServer((req,res)=>{

    res.writeHead(400,{'content-type':'text/html'})
    res.end('hello world from navin with single statement with content type 400')
    
}).listen(8083)