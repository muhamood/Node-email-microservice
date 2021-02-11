const express = require('express');
const { getMessages, createMessage } = require('./controller');

const mailRouter = express.Router();

mailRouter.get('/', getMessages);  // get all messages end point.
mailRouter.post('/create', createMessage);  // create message end point.

module.exports = mailRouter;