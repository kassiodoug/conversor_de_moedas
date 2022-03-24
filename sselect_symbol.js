const fs = require('fs')

let file = fs.readFile('./countries.json', item => item)

console.log(file)