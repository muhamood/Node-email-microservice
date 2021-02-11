const mongoose = require('mongoose');

let db = () => mongoose.connect("mongodb://localhost/node-email-microservice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = db;