
const db = require('./db');


exports.save = (req, res) => {
    const { nombre, ap_paterno, ap_materno, edad, estado_civil, apodo, telefono } = req.body;

    const query = 'INSERT INTO usuarios (nombre, ap_paterno, ap_materno, edad, estado_civil, apodo, telefono) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.execute(query, [nombre, ap_paterno, ap_materno, edad, estado_civil, apodo, telefono], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar los datos');
        } else {
            res.redirect('/');
        }
    });
};
