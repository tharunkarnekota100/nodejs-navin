var http = require('http')

http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'})
    res.end('hello world from navin with single statement with content type')
    
}).listen(8082)