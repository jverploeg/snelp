const path = require('path');
const login = require('./config.js');
const { Client, Pool } = require('pg');

const pool = new Pool({
  user: login.user,
  host: login.host,
  database: login.database,
  port: login.port,
});

// error handle
pool.on('error', (err, client) => {
  console.error('Error:', err);
});

const getReports = (query) => {
  return new Promise ((resolve, reject) => {
    pool.query(query)
      .then((res) => {
        resolve(res.rows);
      })
      .catch((err) => {
        console.log('err: ', err);
        reject(err);
      });
  });
};



module.exports = {
  getReports,
};
