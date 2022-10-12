const EventEmitter = require('events').EventEmitter

module.exports = class Temas extends EventEmitter {
  name = ''
  users = []
  messages = []

  constructor(name) {
    super()
    this.name = name
    this.on('userAdded', (user) => console.log(`${user.name} added to ${this.name}`))
    this.on('messageAdded', this.messageAdded)
  }

  addUser(user) {
    this.users.push(user)
    this.emit('userAdded', user)
  }

  addMessage(user, message) {
    this.messages.push({
      tema: this.name,
      user: user,
      message: message,
      date: new Date()
    })
    this.emit('messageAdded')
  }
  messageAdded(){
    const newMessage = this.messages[this.messages.length -1]
    console.log(`Message Added at ${this.name} by ${newMessage.user.name}`)
    
    // Send the message for each user
    for(const user of this.users){
      user.receiveMessage(newMessage)
    }
  }
}