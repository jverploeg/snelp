const pgp = require('pg-promise')();
const path = require('path');
const login = require('../server/config.js');
// Get the values for these variables from configuration
const user = login.user;
const host = login.host;
const port = login.port;
const database = login.database;

//const db = pgp(`postgres://${user}@${host}:${port}/${database}`);

export default db;
