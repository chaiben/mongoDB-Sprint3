const Publisher = require('./Publisher')

const msg = process.argv.slice(2).join(' ') || 'Hola mundo!'

const publisher = new Publisher()

publisher.send(msg)