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

 //ADD A ROUTE AFTER THE GET ROUTE TO HANDLE ERRONEOUS REQUEST NOT HANDLED BY THE APP
 app.use((req, res) => {
    res.status(404).end();
  });
 
// HERE AT THE BOTTOM OF THE FILE -ADD THE FUNCTION TO START THE EXPRESS.JS SERVER ON PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
