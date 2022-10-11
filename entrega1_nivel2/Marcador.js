module.exports = class Marcador {
  static instancia
  marcadores = []

  constructor() {
    if(!!Marcador.instancia)
      return Marcador.instancia
    
    Marcador.instancia = this
  }

  updateMarcador(joc){
    const position = this.marcadores.findIndex(marcador => marcador.nom === joc.nom)
    if(position === -1)
      this.marcadores.push(joc)
    else{
      this.marcadores[position] = joc
    }
  }

  sortMarcador() {
    let marcadores = [...this.marcadores]
    this.marcadores = []
    for (const joc of marcadores) {
      joc.jugadors.sort((a, b) => a.punts > b.punts ? -1 : 1 )
      this.marcadores.push(joc)
    }
    this.marcadores.sort((a, b) => a.nom > b.nom ? 1 : -1 )
  }

  showMarcador() {
    if(this.marcadores.length === 0) {
      console.log('Marcador está vacío')
      return
    } 

    this.sortMarcador()

    for(const joc of this.marcadores) {
      console.log('+'.padEnd(25, '-') + '+')
      console.log(`| ${joc.nom}`. padEnd(25, ' ')+ '|')
      console.log('+'.padEnd(25, '-') + '+')
      for(const jugador of joc.jugadors){
        console.log(`| ${jugador.nom}`.padEnd(20, ' ') + `${jugador.punts}`.padStart(4, ' ') + ' |')
      }
      console.log('+'.padEnd(25, '-') + '+')
    }
  }
  showGanadores() {
    if(this.marcadores.length === 0) {
      console.log('Marcador está vacío')
      return
    } 

    this.sortMarcador()
    console.log('+'.padEnd(25, '-') + '+')
    console.log('| Ganadores'. padEnd(25, ' ')+ '|')
    console.log('+'.padEnd(25, '-') + '+')
    for(const joc of this.marcadores) {
      console.log(`| ${joc.nom}`.padEnd(14, ' ') + `${joc.jugadors[0].nom}`.padStart(10, ' ') + ' |')      
    } 
    console.log('+'.padEnd(25, '-') + '+')
  }
}