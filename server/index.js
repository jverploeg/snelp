//IMPORT LIBRARIES/PACKAGES
const express = require('express');
const path = require('path');
const cors = require('cors');

//INITIALIZE
const app = express();
//SET PORT
const port = 3000;
//CONNECT DB
//TODO

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