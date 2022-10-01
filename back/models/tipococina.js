'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoCocina = sequelize.define('tipoCocina' , {
    id: {
      allowNull: false,
      autoincremental: true,
      primaryKey: true,
      type: DataTypes.INTEGER(16)
    },
    tipococina:{
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },{
    timestamp: true,
    tablename: 'tipoCocinas'
  });
  return tipoCocina;
};