// database.js
const pgp = require('pg-promise')();

// const connection = {
//   host: 'localhost',
//   port: 5432,
//   database: 'graphql_sample',
//   user: 'vikrant',
//   password: '',
// };

const connection = {
  host: 'postgres',
  port: 5432,
  database: 'helpmecode',
  user: 'postgres',
  password: 'postgres',
};

const db = pgp(connection);

module.exports = db;
