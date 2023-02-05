const { Pool } = require("pg");

const connectionString = "postgresql://postgres:5BJ9TGMbsse1aEs0qAFy@containers-us-west-133.railway.app:7419/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
