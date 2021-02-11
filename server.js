const express = require('express');
const app = express();
const db = require('./config/db');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello welcome to Node email microservice Platform')
});

db().then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(err));
    
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
})