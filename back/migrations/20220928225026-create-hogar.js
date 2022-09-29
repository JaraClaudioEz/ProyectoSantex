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
      isLavadero:{
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      isGaraje:{
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      isDormir:{
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      idParaDormir:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      isTrabajo2: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      isParaTrabajo2:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      tipoCocinaId:{
        allowNull:true,
        type: Sequelize.INTEGER.UNSIGNED,
        reference:{model: 'tipoCocina', key: 'id'}
      },
      tipoCocinaOtro:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      tipoHogarId:{
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
        reference: {model: 'tipoHogar', key: 'id'}
      },
      tipoBañoId:{
        allowNull:true,
        type:Sequelize.INTEGER.UNSIGNED,
        reference:{model: 'tipoBaño', key: 'id'}
      }
    });
    queryInterface.addConstraint('hogares',{
      fields: ['tipoCocinaId'],
      type: 'foreign key',
      name: 'tipo_cocina_fkey',
      references:{
        table: 'tipoCocinas',
        field: 'id'
      },
      onUpdate: 'cascade'
    });
    queryInterface.addConstraint('hogares', {
      fields: ['tipoHogarId'],
      type: 'foreign key',
      name: 'tipo_hogar_fkey',
      references:{
        table: 'tipoHogar',
        field: 'id'
      },
      onUpdate: 'cascade'    })
    return queryInterface.addConstraint('hogares',{
      fields: ['tipoBañoId'],
      type: 'foreign key',
      name: 'tipo_baño_fkey',
      references:{
        table: 'tipoBaños',
        field: 'id'
      },
      onUpdate: 'cascade'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hogares');
  }
};