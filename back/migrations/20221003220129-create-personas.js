'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable ('tipoTrabajo', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipoTrabajo:{
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigoArea: {
        type: Sequelize.INTEGER
      },
      numeroEnElListado:{
        type: Sequelize.INTEGER
      },
      semana:{
        type: Sequelize.INTEGER
      },
      trimestre:{
        type: Sequelize.INTEGER
      },
      año:{
        type: Sequelize.INTEGER
      },
      viviendaN:{
        type: Sequelize.INTEGER
      },
      hogarN:{
        type: Sequelize.INTEGER
      },
      trabajoLaSemanaPasada:{
        type: Sequelize.BOOLEAN,
        comment:'trabajo al menos una hora la semana pasada?'
      },
      trabajoPago:
      {
        type: Sequelize.BOOLEAN,
        comment: 'trabajo pago con dinero o especies'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tipoTrabajoId:{
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        reference:{model: 'tipoTrabajo', key: 'id'},
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('personas');
    await queryInterface.dropTable('tipoTrabajo');
  }
};