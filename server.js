const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello welcome to Node email microservice Platform')
});
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
})