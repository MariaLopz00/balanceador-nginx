const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'prueba',
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM alumnos', (err, results) => {
    if (err) throw err;
    res.json({
      message: "Hola soy el contenedor 2 😎",
      resultados_db:results
    });
  });
});

app.listen(80, () => {
  console.log('Server is running on port 80');
});
