var amqp = require("amqplib/callback_api");

module.exports = class Subscriber {
  host = "amqp://localhost";

  reciever() {
    amqp.connect(this.host, function (error0, connection) {
      if (error0) {
        throw error0;
      }
      connection.createChannel(function (error1, channel) {
        if (error1) {
          throw error1;
        }
        var exchange = "logs";

        channel.assertExchange(exchange, "fanout", {
          durable: false,
        });

        channel.assertQueue(
          "",
          {
            exclusive: true,
          },
          function (error2, q) {
            if (error2) {
              throw error2;
            }
            console.log(
              ` [*] Waiting for messages in ${q.queue}. To exit press CTRL+C`
            );
            channel.bindQueue(q.queue, exchange, "");

            channel.consume(
              q.queue,
              function (msg) {
                if (msg.content) {
                  console.log(` [x] ${msg.content.toString()}`);
                }
              },
              {
                noAck: true,
              }
            );
          }
        );
      });
    });
  }
};
