//IMPORT LIBRARIES/PACKAGES
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

//INITIALIZE
const app = express();
//SET PORT
const port = 3000;
//CONNECT DB
const db = require('./db.js');

//RENDER STATIC FILES
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

//SETUP MIDDLEWARE
app.use(express.json());
app.use(cors());

//CONNECT SERVER
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


//ROUTES and REQUESTS

// app.get('/', (req, res) => {
//   .then((results) => {
//     res.status(200).send(results)
//   })
//   .catch((error) => {
//     res.status(400).send(error)
//   });
// })
app.get('/reports', (req, res) => {
  const query = `SELECT * FROM snow where base is not null ORDER BY base DESC LIMIT 15`;
  db.getReports(query)
  .then((results) => {
    console.log('server',results)
    res.status(200).send(results)
  })
  .catch((error) => {
    res.status(400).send(error)
  });
})