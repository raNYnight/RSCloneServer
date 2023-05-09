const { Pool } = require("pg");

const connectionString = "";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
