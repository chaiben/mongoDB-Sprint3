module.exports = class Jugador {
  nom = ''
  punts = 0
  constructor(nom) {
    // this._id = nom + Math.floor(Math.random() * 100) + Date.now()
    this.nom = nom
  }
}