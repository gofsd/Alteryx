import nodemailer from'nodemailer'
import process from 'process'
const env = process.env
let transporter = nodemailer.createTransport({
 host: env.SMTP_HOST || 'smtp.ukr.net',
 port: 465,
 secure: true,
 auth: {
        user: env.ADMIN_EMAIL,
        pass: env.SMTP_PASSWORD
    }
})


export default transporter
