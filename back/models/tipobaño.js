'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoBaño = sequelize.define('tipoBaño' , {
    id: {
      allowNull: false,
      autoincremental: true,
      primaryKey: true,
      type: DataTypes.INTEGER(16)
    },
    tipobaño:{
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },{
    timestamp: true,
    tablename: 'tipoBaños'
  });
  return tipoBaño;
};