'use strict';
module.exports = (sequelize, DataTypes) => {
  const interviewType =  sequelize.define('interviewType', {
    id:{
      Type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipoEntrevista:{
      Type: DataTypes.STRING(255),
      allowNull: false
    }
  },{
    timestamp: true,
    tablename: 'interviewType'
  });
  return interviewType;
};