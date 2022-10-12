const EventEmitter = require('events').EventEmitter

module.exports = class User extends EventEmitter{
  name = ''
  messages = []
  constructor(name) {
    super()
    this.name = name
    this.on('newMessage', (message) => this.showNewMessage(message))
  }

  receiveMessage(message) {
    this.messages.push(message)
    this.emit('newMessage', message)
  }

  showNewMessage(message){
    console.log(`${this.name} received a message from ${message.user.name} at ${message.tema} group:`)
    console.log('+'.padEnd(48, '-')+'+')
    console.log(`|  ${message.message.padEnd(45,' ')}|`)
    console.log('+'.padEnd(48, '-')+'+')
  }
}