#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

module.exports = class Publisher {
  host = 'amqp://localhost'
  send (msg) {
    amqp.connect(this.host, function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      var exchange = 'logs';

      channel.assertExchange(exchange, 'fanout', {
        durable: false
      });
      channel.publish(exchange, '', Buffer.from(msg));
      console.log(` [x] Sent ${msg}`);
    });

    setTimeout(function() {
      connection.close();
      process.exit(0);
    }, 500);
  });
  }
}