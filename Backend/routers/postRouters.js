const express = require('express');
const router = express.Router();
const Model = require('../models/postModel');


router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
})

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('post add response');
});


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