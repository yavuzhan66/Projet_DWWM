const express = require('express');
const router = express.Router();
const user = require('../models/models');

router.get('/', (req, res) => {
    user.findAll()
    .then((users) => {
        res.render('index', {controllers});
    })
    .catch((err) => {
        console.log('Erreur pas de récupération');
        res.status(500).json({ error: 'erreur produits'});
    });
})

router.get('/add', (req, res) => {
    res.render('adduser', {error: null});
});