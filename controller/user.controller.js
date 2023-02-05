const db = require("../db");

class UserController {
  async getUsers(req, res) {
    const users = await db.query(`select *
    from users`);
    console.log(users.rows);
    res.json(users.rows);
  }
  async getSingleUser(req, res) {
    const id = req.params.id;
    const user = await db.query("select * from users where id = $1", [id]);
    res.json(user.rows[0]);
  }
  async createUser(req, res) {
    const { email, user_name, password, registration_date, permalink } = req.body;
    const newUser = await db.query(
      `INSERT INTO users (email, user_name, password, permalink,  registration_date) values ($1, $2, $3, $4, $5) RETURNING *`,
      [email, user_name, password, permalink, registration_date]
    );
    res.json(newUser.rows[0]);
  }
  async deleteSingleUser(req, res) {
    const id = req.params.id;
    const user = await db.query("delete from users where id = $1", [id]);
    res.json(user.rows[0]);
  }
}
module.exports = new UserController();
