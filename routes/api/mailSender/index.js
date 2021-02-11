const express = require('express');
const nodemailer = require('nodemailer');
const keys = require('../../../config/keys');

const mailerRouter = express.Router();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 465,
    auth: {
      user: keys.EMAIL,
      pass: keys.PASSWORD
    }
  });

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  module.exports = mailerRouter;