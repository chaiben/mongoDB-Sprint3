module.exports = class Marcador {
  static instancia
  jugadors = []

  constructor() {
    if(!!Marcador.instancia)
      return Marcador.instancia
    
    Marcador.instancia = this
  }

  updateMarcador(jugadors){
    this.jugadors = jugadors
    this.jugadors = this.jugadors.sort((a,b) => {
      if(a.punts > b.punts)
        return -1;
      if(a.punts < b.punts)
        return 1;
      if(a.punts === b.punts)
        return 0;
    })
  }

  showMarcador() {
    if(this.jugadors.length === 0) {
      console.log('Marcador está vacío')
    } else {
      console.log('Marcador: ', this.jugadors)
    }
  }
}