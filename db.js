const { Pool } = require("pg");

const connectionString = "postgresql://postgres:JTd32LlnIL22voammEzE@containers-us-west-133.railway.app:7419/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
