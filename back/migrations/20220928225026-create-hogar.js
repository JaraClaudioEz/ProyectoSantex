'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hogares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      habitaciones: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      habitacionesParaDormir:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      isTrabajo:{
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      habitacionesParaTrabajar:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      isCocina:{
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tipoCocinaId:{
        allowNull:true,
        type: Sequelize.INTEGER.UNSIGNED,
        reference:{model: 'tipoCocina', key: 'id'}
      }
    });
    return queryInterface.addConstraint('hogares',{
      fields: ['tipoCocinaId'],
      type: 'foreign key',
      name: 'tipo_cocina_fkey',
      references:{
        table: 'tipoCocinas',
        field: 'id'
      },
      onUpdate: 'cascade'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hogares');
  }
};