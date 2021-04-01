//IMPORT LIBRARIES/PACKAGES
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

//INITIALIZE
const app = express();
//SET PORT
const port = 3001;
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

app.get('/reports', (req, res) => {
  //const query = `SELECT * FROM snow2 where base is not null ORDER BY base DESC LIMIT 15`;
  const query = `SELECT * FROM snow2 ORDER BY resort ASC`;
  //TODO: algorithm this side or in the client...
  db.getReports(query)
  .then((results) => {
    console.log('server',results)
    res.status(200).send(results)
  })
  .catch((error) => {
    res.status(400).send(error)
  });
})