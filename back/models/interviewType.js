'use strict';
module.exports = (sequelize, DataTypes) => {
  const interviewType =  sequelize.define('interviewType', {
    id:{
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipoEntrevista:{
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },{
    timestamp: true,
    tablename: 'interviewType'
  });
  return interviewType;
};