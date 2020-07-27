import EventEmitter from "events"
import smtp from './smtp'

//@ts-ignore
const taskEmitter = new EventEmitter();

taskEmitter.on("registration", async( params: any) => {
    smtp.sendMail({
        from: 'madi.nickname@ukr.net', // sender address
        to: params.email, // list of receivers
        subject: "subject", // Subject line
        html: "body"// plain text body
      }, function (err, info) {
         if(err)
           console.log("from error", err)
         else
           console.log(info)
      });
    console.log("registration event: ", params)
})

taskEmitter.on("changePassword", async( params: any) => {
    console.log("changePassword event: ", params)
})

export default taskEmitter