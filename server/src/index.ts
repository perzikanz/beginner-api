import express from 'express';
import mysql from 'mysql2';

import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todo/all', (req, res) => {
  connection.query('SELECT * FROM todo', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
