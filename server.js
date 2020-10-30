const express = require('express');
const bodyParser = require('body-parser');

const mysql = require("mysql");
const dbConfig = require("./db.config.js");

// Create a connection to the database
const sql = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
sql.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

const app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/points', (req, res) =>{
  console.log(req.body.points);
  sql.query("INSERT INTO score (Q1, `Q1.5`, Q2, Q3, Q4, Q5, Q6) VALUES ?", [[req.body.points]], (err, res)=>{
    if (err) console.log(err);
	console.log(res);
  });
  return res.send('ok');
})

const port = 8181
app.listen(port, () => {
  console.log('Server listening on http://localhost:'+port);
});
