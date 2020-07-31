import amqp from 'amqplib';
import { createConnection } from "typeorm";
import EmailTask from './entities/EmailTasks.entity'

export async function start(params: { conf: any, env: any }) {
  const { env, conf } = params;
  let fromTime: number = 0, toTime: number = 0;

  try{
    const connection = await createConnection(conf);
    const emailTaskRepository = connection.getRepository(EmailTask);
    const connect = await amqp.connect(env.AMQP_HOST);
    const channel = await connect.createChannel()
    const interval = setInterval(async () => {
        console.log(fromTime, toTime, 'setInterval')
        if(fromTime === 0){
            fromTime = Date.now();
            console.log('from first if: ')
        } else {
            fromTime = toTime;
        }
        toTime = fromTime + +env.POLLING_INTERVAL;

        const result = await emailTaskRepository
        .createQueryBuilder()
        .select("*")
        .where("timestamp >= :from and timestamp < :to order by timestamp asc", { from: fromTime, to: toTime })
        .getRawMany()
        const emailTask = new EmailTask();


        emailTask.message = { type: "changePassword", params: {
          email: "madi.nickname@gmail.com",
          body: {
            title: "some title"
          },
          subject: "subject"
          }
        }
        emailTask.timestamp = Date.now() + 20 * 999;
        emailTaskRepository.save(emailTask)

        var q = env.TASKS_QUEUE;
        channel.assertQueue(q, {durable: false});
        for(let i = 0; result.length > i; i++) {
            var msg = JSON.stringify(result[i].message);
            channel.sendToQueue(q, new Buffer(msg));
        }
    }, +env.POLLING_INTERVAL)


  } catch(err){
    console.error(err)
  }
}