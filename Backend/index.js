//import
const express = require('express');

//init
const app = express();

const postRouters = require('./routers/postRouters');

//middleware
app.use('/post', postRouters);


const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express')
});


app.get('/add', (req, res) => {
    res.send('add response from express')
})
app.listen( port, () => { console.log('express server started') } ); 