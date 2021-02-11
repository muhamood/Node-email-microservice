const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');
const mailRouter = require('./routes/api/mail');
const mailerRouter = require('./routes/api/mailSender');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello welcome to Node email microservice Platform')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

db().then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(err));

app.use('/mail', mailRouter);
app.use('/mailer', mailerRouter);    
    
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
})