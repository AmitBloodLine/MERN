const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    res.send('post getall response');
});

router.get('/update', (req, res) => {
    res.send('post update response');
});

router.get('/delete', (req, res) => {
    res.send('post delete response');
});

// getall
// update
// delete

module.exports = router;

// shaurya
// abhay
// yash
// sneha