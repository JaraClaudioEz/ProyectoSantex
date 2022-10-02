const userModel = require('../models').user;

async function findOne(data, attributes = null) {
  const user = await userModel.findOne({ where: data, attributes });
  return user;
}

async function addOne(data) {
  const [user, created] = await userModel.findOrCreate({
    where: { username: data.hashedPass },
    defaults: {
      username: data.username,
      password: data.hashedPass,
      id: 0,
    },
  });
  return [user, created];
}

module.exports = {
  findOne,
  addOne,
};
