const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/user.services');
const InvalidPasswordException = require('../exceptions/invalidPassword.exceptions');
const UserNotFoundException = require('../exceptions/userNotFound.exception');
const UserExistsException = require('../exceptions/userExists.exceptions');

function createToken(id) {
  const expirationTime = Number(process.env.JWT_EXPIRATION_TOKEN);
  return jwt.sign(
    { userId: id },
    process.env.JWT_ENCRYPTION_TOKEN,
    { expiresIn: expirationTime },
  );
}
async function login(username, password) {
  const user = await userService.findOne({ username });
  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      const token = createToken(user.id);
      delete user.dataValues.password;
      return { user, token };
    }
    throw new InvalidPasswordException();
  }
  throw new UserNotFoundException();
}

async function getOne(data) {
  return userService.findOne(data, { exclude: ['password'] });
}

async function register(username, password) {
  const hashedPass = await bcrypt.hash(password, 10);
  const [user, created] = await userService.addOne({ username, hashedPass });
  if (created) {
    const token = createToken(user.id);
    delete user.dataValues.password;
    return { user, token };
  }
  throw new UserExistsException();
}

module.exports = {
  login,
  getOne,
  register,
};
