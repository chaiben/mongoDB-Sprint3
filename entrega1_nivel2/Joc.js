const Marcador = require('./Marcador')
const Jugador = require('./Jugador')

module.exports = class Joc {
  nom = '';
  jugadors = [];
  constructor(nom) {
    this.nom = nom
  }

  afegirJugador (nom) {
    const jugador = new Jugador(nom)
    this.jugadors = [...this.jugadors, jugador]
    const marcador = new Marcador()
    marcador.updateMarcador(this.jugadors)
    return jugador
  }

  afegirPunts (jugador, punts) {
    console.log(`${jugador.nom} marca ${punts} puntos!`)
    const position = this.jugadors.findIndex(j => j === jugador)
    
    if(position !== -1){
      this.jugadors[position].punts = this.jugadors[position].punts + punts
      const marcador = new Marcador()
      marcador.updateMarcador(this.jugadors)
    }
    this.verMarcador()
  }

  verMarcador() {
    const marcador = new Marcador()
    marcador.showMarcador()
  }

}