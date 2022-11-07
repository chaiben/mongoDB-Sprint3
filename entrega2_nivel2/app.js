const Articulo = require('./Articulo')
const ArticuloES = require('./ArticuloES')

const iPhone14USD = new Articulo('iPhone 14 Pro USD', 1000, 'USD')
const iPhone14GBP = new Articulo('iPhone 14 Pro GBP', 1000, 'GBP')
const iPhone14CHF = new Articulo('iPhone 14 Pro CHF', 1000, 'CHF')
const iPhone14JPY = new Articulo('iPhone 14 Pro JPY', 1000, 'JPY')
const iPhone14CAD = new Articulo('iPhone 14 Pro CAD', 1000, 'CAD')
const iPhone14CNY = new Articulo('iPhone 14 Pro CNY', 1000, 'CNY')

const iPhone14USD_ES = new ArticuloES(iPhone14USD)
const iPhone14GBP_ES = new ArticuloES(iPhone14GBP)
const iPhone14CHF_ES = new ArticuloES(iPhone14CHF)
const iPhone14JPY_ES = new ArticuloES(iPhone14JPY)
const iPhone14CAD_ES = new ArticuloES(iPhone14CAD)
const iPhone14CNY_ES = new ArticuloES(iPhone14CNY)




console.log(iPhone14USD.info)
console.log(iPhone14GBP.info)
console.log(iPhone14CHF.info)
console.log(iPhone14JPY.info)
console.log(iPhone14CAD.info)
console.log(iPhone14CNY.info)

console.log(iPhone14USD_ES.info)
console.log(iPhone14GBP_ES.info)
console.log(iPhone14CHF_ES.info)
console.log(iPhone14JPY_ES.info)
console.log(iPhone14CAD_ES.info)
console.log(iPhone14CNY_ES.info)