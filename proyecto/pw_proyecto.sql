
DROP DATABASE IF EXISTS pw_proyecto;
CREATE DATABASE IF NOT EXISTS pw_proyecto;
USE pw_proyecto;

CREATE TABLE informacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL
);


