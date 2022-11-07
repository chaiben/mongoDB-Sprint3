const Marcador = require('./Marcador')
const Jugador = require('./Jugador')

module.exports = class Joc{
  nom = '';
  jugadors = [];
  constructor(nom) {
    this.nom = nom
  }

  get marcador() {
    return new Marcador()
  }

  afegirJugador (nom) {
    const jugador = new Jugador(nom)
    this.jugadors = [...this.jugadors, jugador]
    this.marcador.updateMarcador(this)
    return jugador
  }

  afegirPunts (jugador, punts) {
    console.log(`${jugador.nom} marca ${punts} puntos en el juego de ${this.nom}!`)
    const position = this.jugadors.findIndex(j => j === jugador)
    
    if(position !== -1){
      this.jugadors[position].punts = this.jugadors[position].punts + punts

      this.marcador.updateMarcador(this)
    }
  }

  showMarcador(){
    this.marcador.showMarcador()
  }

  showGanadores(){
    this.marcador.showGanadores()
  }
}