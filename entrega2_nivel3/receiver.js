const Subscriber = require('./Subscriber')

const msg = process.argv.slice(2).join(' ') || 'Hola mundo!'

const subscriber = new Subscriber()

subscriber.reciever()