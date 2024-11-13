

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const port = 3006;

const app= express();
//configuracion para el uso peticiones post
app.use( bodyParser.urlencoded({extended:false}));

//platillas que sean dinamicas
app.set('view engine','ejs');

const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',
    password: '1234',
    database: 'pw_proyecto',
    port: 3306
});

db.connect(err=>{
    if(err){
        console.log(`Error en la conexion ${err}`);
    }else {
        console.log(`Base de datos conectada`)    
    }
});

app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});