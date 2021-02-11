const keys = require('../../../config/keys');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 465,
    auth: {
      user: keys.EMAIL,
      pass: keys.PASSWORD
    }
  });

  const mailSender = async (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let message = req.body.message
  
    let mail = {
        name: name,
        from: email,
        to: keys.EMAIL,
        subject: keys.SUBJECT,
        phone: phone,
        text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success',
         mail
        })
      }
    })
  }

  module.exports =  { mailSender, transporter };