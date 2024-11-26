
const express = require('express');
const router = express.Router();

const db = require('../config/db');

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error eliminando el usuario');
        }
        res.redirect('/');
    });
});


module.exports = router;