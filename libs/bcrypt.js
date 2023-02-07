const bcrypt = require('bcrypt');

class Encrypt {
  async hashPassword(password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async checkPassword(password, hashedPassword) {
      return await bcrypt.compare(password, hashedPassword);
  }
};


// async function verifyPassword(password, hashedPasswordFromDB) {
//     const isPasswordCorrect = await checkPassword(password, hashedPasswordFromDB);
//     if (isPasswordCorrect) {
//         // Passwords match
//         return true;
//     } else {
//         // Passwords do not match
//         return false;
//     }
// }

module.exports = new Encrypt;