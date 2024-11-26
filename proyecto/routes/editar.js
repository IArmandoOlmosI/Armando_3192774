const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtener los datos del usuario para editar
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al obtener los datos del usuario');
        }
        if (results.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        
        // Cambiar 'usuarios' por 'usuario' para que coincida con la plantilla
        res.render('editar', { usuarios: results[0] });
    });
});

// Actualizar los datos del usuario
router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, ap_paterno, ap_materno, edad, estado_civil, apodo, telefono } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, ap_paterno = ?, ap_materno = ?, edad = ?, estado_civil = ?, apodo = ?, telefono = ? WHERE id = ?';
    
    db.query(
        query,
        [nombre, ap_paterno, ap_materno, edad, estado_civil, apodo, telefono, id],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al actualizar los datos del usuario');
            }
            res.redirect('/');
        }
    );
});

module.exports = router;