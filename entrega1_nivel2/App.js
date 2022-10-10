const Joc = require('./Joc')

const joc = new Joc();

const marcal = joc.afegirJugador("Marçal")
const omar = joc.afegirJugador("Omar")
const marta = joc.afegirJugador("Marta")
const gabi = joc.afegirJugador("Gabi")

joc.afegirPunts(marcal, -4)
joc.afegirPunts(gabi, -10)
joc.afegirPunts(omar, 15)
joc.afegirPunts(gabi, 23)
joc.afegirPunts(marcal, 5)
joc.afegirPunts(marta, 50)

const joc2 = new Joc();

const marcal2 = joc2.afegirJugador("Marçal")
const omar2 = joc2.afegirJugador("Omar")
const marta2 = joc2.afegirJugador("Marta")
const gabi2 = joc2.afegirJugador("Gabi")

joc2.afegirPunts(marcal2, -4)
joc2.afegirPunts(gabi2, -10)
joc2.afegirPunts(omar2, 15)
joc2.afegirPunts(gabi2, 23)
joc2.afegirPunts(marcal2, 5)
joc2.afegirPunts(marta2, 50)