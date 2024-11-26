

const express = require('express');
const router = express.Router();
const querys = require('../config/querys');


router.get('/', (req, res) => {
    res.render('agregar');
});

router.post('/save', querys.save);

module.exports = router;