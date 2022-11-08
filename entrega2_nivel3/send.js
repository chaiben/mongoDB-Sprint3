#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

// connect to RabbitMQ server

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = 'Hello Marc and Alex!!!';

    // declare a queue
    channel.assertQueue(queue, {
      durable: false
    });

    // publish a message to the queue
    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(` [x] Sent ${msg}`);
  });

  // Close connection
  setTimeout(function() {
    connection.close();
    process.exit(0)
    }, 500);
});
