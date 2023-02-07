const db = require("../db");
const { checkPassword } = require("../libs/bcrypt");
const encrypt = require("../libs/bcrypt");
class UserController {
  async getUsers(req, res) {
    const users = await db.query(`select *
    from users`);
    console.log(users.rows);
    if (!req || !res) return users.rows;
    res.json(users.rows);
  }

  async getSingleUser(req, res) {
    const id = req.params.id;
    const user = await db.query("select * from users where id = $1", [id]);
    res.json(user.rows[0]);
  }

  async authorize(req, res) {
    const response = {isAuthorized: false};
    const { user_name, password } = req.body;
    const user = await db.query("select * from users where user_name = $1", [user_name]);
    const isPasswordsEqual = await checkPassword(password, user.rows[0].password);
    if (!isPasswordsEqual) {
      res.statusCode = 400;
      res.json(response);
      return;
    }
    response.isAuthorized = true
    res.json(response);
  }

   createUser = async (req, res) => {
    const { email, user_name, password, registration_date, permalink } = req.body;
    const usersInDB = await this.getUsers();
    const errors = [];
    usersInDB.forEach(user => {
      if (user.email.toLowerCase() === email.toLowerCase()) errors.push("Email already in use!");
      if (user.user_name.toLowerCase() === user_name.toLowerCase()) errors.push("User name already in use!");
    });
    if (errors.length) {
      res.statusCode = 400;
      res.end(errors.join("\n"))
      return;
    }
    const hashedPassword = await encrypt.hashPassword(password);
    const newUser = await db.query(
      `INSERT INTO users (email, user_name, password, permalink,  registration_date) values ($1, $2, $3, $4, $5) RETURNING *`,
      [email, user_name, hashedPassword, permalink, registration_date]
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
