
const express = require('express');
const router = express.Router();

const conexion = require('../config/db');


router.get('/', (req, res) => {
    conexion.query('SELECT * FROM usuarios',(error, results)=> {
        if(error) {
            throw error;
        }else {
            res.render('index', {results});
        }
    })
});

module.exports = router;