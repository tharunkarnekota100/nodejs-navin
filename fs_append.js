
var fs = require('fs')

fs.appendFile('calc.js','console.log("hii")',(err)=>{
    console.log('file saved')
})