var fs = require('fs')

fs.readFile('calc.js','utf8',(err,data)=>{
    console.log(data)
})