const express = require('express');
const nodemailer = require('nodemailer');
const keys = require('../../../config/keys');
const { mailSender, transporter } = require('./controller');

const mailerRouter = express.Router();

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  mailerRouter.post('/sender', mailSender );
  
  module.exports = mailerRouter;