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
        allowNull: true,
        comment: 'numero de habitaciones'
      },
      habitacionesParaDormir:{
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'cuantas habitaciones se usan para dormir'
      },
      isTrabajo:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        comment: 'alguna se utiliza para trabajar?'
      },
      habitacionesParaTrabajar:{
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'cuantas se usan para trabajar?'
      },
      isCocina:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        comment: 'tiene cuarto de cocina?'
      },
      isLavadero:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        comment: 'tiene lavadero?'
      },
      isGaraje:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        comment: 'tiene garaje?'
      },
      isDormir:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        comment: 'de baño/lavadero/garaje usa alguno para dormir?'
      },
      idParaDormir:{
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'cuantos?'
      },
      isTrabajo2: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        comment: 'de baño/lavadero/garaje usa alguno para trabajar?'
      },
      isParaTrabajo2:{
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'cuantos?'
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
        reference:{model: 'tipoCocina', key: 'id'},
        comment: 'tipo de cocina'
      },
      tipoCocinaOtro:{
        type: Sequelize.STRING,
        allowNull: true,
        comment:'por si tipo de cocina es otros'
      },
      tipoHogarId:{
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
        reference: {model: 'tipoHogar', key: 'id'}
      },
      tipoBañoId:{
        allowNull:true,
        type:Sequelize.INTEGER.UNSIGNED,
        reference:{model: 'tipoBaño', key: 'id'},
        comment: 'tipo de baño'
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