var http = require('http')

http.createServer((req,res)=>{

    res.end('hello world from navin with single statement')
    
}).listen(8081)