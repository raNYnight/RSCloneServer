const { Pool } = require("pg");

const connectionString = "postgresql://postgres:JsNdfJEdnuDpIXuyaOpr@containers-us-west-171.railway.app:7274/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
