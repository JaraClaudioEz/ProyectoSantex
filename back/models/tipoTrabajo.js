'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoTrabajo = sequelize.define('tipoTrabajo' , {
    id: {
      allowNull: false,
      autoincremental: true,
      primaryKey: true,
      type: DataTypes.INTEGER(16)
    },
    tipoTrabajo:{
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },{
    timestamp: true,
    tablename: 'tipoTrabajo'
  });
  return tipoTrabajo;
};