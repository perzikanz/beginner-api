import express from 'express';
import mysql from 'mysql2';

import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

const app = express();
const port = 3000;

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
