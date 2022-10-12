const User = require('./user')
const Temas = require('./temas')

const marcal = new User('Marçal')
const omar = new User('Omar')
const maria = new User('Maria')

const mates = new Temas('Mates')
const fisica = new Temas('Fisica')

mates.addUser(marcal)
fisica.addUser(omar)
fisica.addUser(maria)

mates.addMessage(maria, "Hola mundo!!")
fisica.addMessage(marcal, "Tengo hambre!!")