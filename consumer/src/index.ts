import * as broker from './broker'
import * as process from 'process'
const env = process.env;

broker.start({ env });



/*
amqp.connect('amqp://rabbitmq', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages from queue %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log(msg, 'from consumer')
      //@ts-ignore
      msg = JSON.parse(msg.content.toString());

    }, {noAck: true});
  });
});
*/



/**
 *       smtp.sendMail({
        from: 'madi.nickname@ukr.net', // sender address
        to: msg.email, // list of receivers
        subject: msg.subject, // Subject line
        html: msg.body// plain text body
      }, function (err, info) {
         if(err)
           console.log(err)
         else
           console.log(info);
      });
      console.log("\n [x] Received email: %s, subject: %s, body: %s \n", msg.email, msg.subject, msg.body);
 */