const Marcador = require('./Marcador')
const Jugador = require('./Jugador')

module.exports = class Joc{
  nom = '';
  jugadors = [];
  constructor(nom) {
    this.nom = nom
  }

  afegirJugador (nom) {
    const jugador = new Jugador(nom)
    this.jugadors = [...this.jugadors, jugador]
    const marcador = new Marcador()
    marcador.updateMarcador(this)
    return jugador
  }

  afegirPunts (jugador, punts) {
    console.log(`${jugador.nom} marca ${punts} puntos en el juego de ${this.nom}!`)
    const position = this.jugadors.findIndex(j => j === jugador)
    
    if(position !== -1){
      this.jugadors[position].punts = this.jugadors[position].punts + punts
      const marcador = new Marcador()
      marcador.updateMarcador(this)
    }
  }

  showMarcador(){
    const marcador = new Marcador()
    marcador.showMarcador()
  }

  showGanadores(){
    const marcador = new Marcador()
    marcador.showGanadores()
  }
}