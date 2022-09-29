'use strict';
module.exports = (sequelize, DataTypes) => {
  const hogar = sequelize.define('hogar' , {
    id: {
      allowNull: false,
      autoincremental: true,
      primaryKey: true,
      type: DataTypes.INTEGER(16)
    },
    habitaciones:{
      type: DataTypes.INTEGER(16),
      allowNull: false
    },
    habitacionesParaDormir:{
      type: DataTypes.INTEGER(16),
      allowNull: true
    },
    isTrabajo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    habitacionesParaTrabajar: {
      type: DataTypes.INTEGER(16),
      allowNull: true
    },
    isCocina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },{
    timestamp: true,
    tablename: 'hogares'
  });
  return hogar;
};