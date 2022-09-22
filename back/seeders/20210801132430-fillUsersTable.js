/* cSpell: disable */
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('roles', [
    {
      name: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Test',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {
      truncate: true,
      cascade: false,
    });
  },
};

