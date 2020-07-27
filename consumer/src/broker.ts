import amqp from 'amqplib';
import emitter from './EventEmitter'


export async function start(params: { env: any }) {
  const { env } = params
  const connect = await amqp.connect(env.AMQP_HOST)
  const channel = await connect.createChannel()
  var q = env.TASKS_QUEUE;
  channel.assertQueue(q, { durable: false })
  const message = await channel.consume(q, function(msg: any) {
    msg = JSON.parse(msg.content.toString())
    emitter.emit(msg.type, msg.params)
  }, { noAck: true })
}