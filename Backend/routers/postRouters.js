const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('post add response');
});

//getall
//update
//delete

router.get('/getall', (req, res) => {
    res.send('post getall response')
});

router.get('/update', (req, res) => {
    res.send('post update response')
});

router.get('/delete', (req, res) => {
    res.send('post delete response')
});

module.exports = router;