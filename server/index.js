//IMPORT LIBRARIES/PACKAGES
const express = require('express');
const path = require('path');
const cors = require('cors');

//INITIALIZE
const app = express();
//SET PORT
const port = 3000;
//CONNECT DB
const db = require('./db.js');

//RENDER STATIC FILES
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

//SETUP MIDDLEWARE
app.use(express.json());
app.use(cors());

//CONNECT SERVER
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


//ROUTES and REQUESTS
// 429ae1cbc97948ac92dec6245e3d025c984ff75b

app.get('/reports', (req, res) => {
  const query = `SELECT * FROM snow ORDER BY base ASC LIMIT 15`;
  db.getReports(query)
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((error) => {
    res.status(400).send(error)
  });
})