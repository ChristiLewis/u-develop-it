//IMPORT MYSQL2
const mysql = require('mysql2');
// OPEN THE SERVER.JS FILE AND IMPORT EXPRESS
const express = require('express');
//ADD THE PORT DESIGNATION AND THE app EXPRESSION
const PORT = process.env.PORT || 3001;
const app = express();

//ADD THE EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//ADD THE mysql MIDDLEWARE CONNECTION CODE AFTER THE EXPRESS.JS MIDDLEWARE SECTION TO CONNECT TO DB
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'IDzvTw%$Jlx',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );




//TEST THE EXPRESS.JS CONNECTION JUST ABOVE THE CONNECTION FUNCTION - COMMENT OUT AFTER THE TEST WORKS
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

// //QUERY THE DATABASE TO TEST THE CONNECTION
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

//  //ADD A CATCHALL ROUTE AFTER THE GET ROUTE TO HANDLE ERRONEOUS REQUEST NOT HANDLED BY THE APP
//  app.use((req, res) => {
//     res.status(404).end();
//   });

//GET ALL CANDIDATES
app.get('/api/candidates', (req, res) => {
  const sql = `SELECT * FROM candidates`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

//SINGLE CANDIDATE
app.get('/api/candidate/:id', (req, res) => {
  const sql = `SELECT * FROM candidates WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

//DELTE CANDIDATE


//CREATE CANDIDATE
 
// HERE AT THE BOTTOM OF THE FILE -ADD THE FUNCTION TO START THE EXPRESS.JS SERVER ON PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
