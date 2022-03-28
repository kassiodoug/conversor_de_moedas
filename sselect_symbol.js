const fs = require('fs')

const response = fs.readFileSync('./countries.json', {encoding: "utf-8", flag: "r"})

let dados = JSON.parse(response)
let arrayCurrencys = {}

for(let i of dados){
  arrayCurrencys[i.currency.code] = i.currency.symbol
}

fs.writeFileSync('./currencySymbols.json', JSON.stringify(arrayCurrencys), { encoding: "utf-8" })
// console.log(i["currency"])