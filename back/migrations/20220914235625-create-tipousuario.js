'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('roles',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          comment: 'Primary key: Unique role ID.',
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          comment: 'Unique role name.',
          unique: true,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    await queryInterface.addColumn(
        'users',
        'role_id',
        {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          reference: {model:'roles', key:'id'}
        },
      );
    return queryInterface.addConstraint('users', {
          fields: ['role_id'],
          type: 'foreign key',
          name: 'role_id_fkey',
          references: {
            table: 'roles',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
    },
  down: async (queryInterface) => {
    queryInterface.dropTable('roles');
    await queryInterface.removeConstraint('users', 'role_id_fkey');
    return queryInterface.removeColumn('users', 'role_id');
  }
};
