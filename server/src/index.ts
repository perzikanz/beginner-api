import express from 'express';
import mysql from 'mysql2';

import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const port = 3001;
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.append('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todo/all', (req, res) => {
  connection.query('SELECT * FROM todo', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/todo/:todoid', (req, res) => {
  connection.query(
    `SELECT * FROM todo WHERE id = ${req.params.todoid}`,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.post('/todo', (req, res) => {
  const text: string = req.body.text;
  const checked: string = req.body.checkd || 'false';
  connection.query(
    `INSERT INTO todo VALUES (null, '${text}', '${checked}')`,
    (error, results, fields) => {
      if (error) {
        res.send(error);
      } else {
        res.send(results);
      }
    }
  );
});

app.put('/todo', (req, res) => {
  const id: number = req.body.id;
  const checked: boolean = req.body.checked;
  connection.query(
    `UPDATE todo SET checked = ${checked} WHERE id = ${id}`,
    (error, results, fields) => {
      if (error) {
        res.send(error);
      } else {
        res.send(results);
      }
    }
  );
});

app.delete('/todo', (req, res) => {
  const id: number = req.body.id;
  connection.query(
    `DELETE FROM todo WHERE id=${id}`,
    (error, results, fields) => {
      if (error) {
        res.send(error);
      } else {
        res.send(results);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
