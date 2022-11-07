module.exports = class Articulo {
  nombre = ''
  precio = 0
  divisa = 'USD'
  idioma = 'en-US'

  constructor(nombre, precio, divisa){
    this.nombre = nombre
    this.precio = precio
    this.divisa = divisa
  }

  get precioFormateado (){
    const formater =  new Intl.NumberFormat(this.idioma, {
      style: 'currency',
      currency: this.divisa
    })
    return formater.format(this.precio)
  }

  get info (){
    return `${this.nombre} vale ${this.precioFormateado}`
  }
}