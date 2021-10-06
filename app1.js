
var http = require('http')

http.createServer((req,res)=>{

    res.write('hello world from navin')
    res.end();
}).listen(8080)