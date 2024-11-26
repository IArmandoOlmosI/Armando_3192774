const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index'); 
const editarRouter = require('./routes/editar');
const agregarRouter = require('./routes/agregar');
const eliminarRoutes = require('./routes/eliminar');

const app = express();

// Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Carpeta estática
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRouter);
app.use('/editar', editarRouter);
app.use('/agregar', agregarRouter);
app.use('/eliminar', eliminarRoutes);

const port = 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto http://192.168.3.15:${port}`);
});



