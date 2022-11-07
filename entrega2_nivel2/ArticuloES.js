const divisa_conversion = require('./currency_conversions.json')
const Articulo = require('./Articulo')

module.exports = class ArticuloES extends Articulo {
  articulo = null
  idioma = 'es-ES'
  divisa = 'EUR'
  precio = 0

  constructor(articulo){
    super()
    this.articulo = articulo
    this.nombre = articulo.nombre
    const regex = new RegExp(this.articulo.divisa + '_' + this.divisa)
    this.precio = this.articulo.precio * Object.entries(divisa_conversion).find(n => regex.test(n))[1].toFixed(2)
  }

}