const db = require("../db");

class TestController {
  async getTestsInfo(req, res) {
    const tests = await db.query(`SELECT * FROM tests`);
    res.header("Content-Type", "application/json").status(200).send(JSON.stringify(tests.rows));
  }

  async getPlayedTestsInfo(req, res) {
    const id = req.params.test_id;
    const tests = await db.query(`SELECT * FROM 
      users_tests WHERE tests_id = ${id}`);
    res.header("Content-Type", "application/json").status(200).send(JSON.stringify(tests.rows));
  }
  async getUserPlayedAllTests(req, res) {
    const id = req.params.id;
    console.log(id);
    const user_tests = await db.query(`SELECT * FROM 
      users_tests WHERE user_id = ${id}`);
    res.header("Content-Type", "application/json").status(200).send(JSON.stringify(user_tests.rows));
  }
  async getUserPlayedSpecificTest(req, res) {
    const test_id = req.params.test_id;
    const user_id = req.params.id;
    const user_tests = await db.query(`SELECT * FROM users_tests
      WHERE user_id = ${user_id} AND tests_id = ${test_id}`);
    res.header("Content-Type", "application/json").status(200).send(JSON.stringify(user_tests.rows));
  }
}
module.exports = new TestController();
