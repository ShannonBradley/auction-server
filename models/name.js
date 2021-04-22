const { DataTypes } = require("sequelize");
const db = require("../db");

const Name = db.define("name", {
  
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  
  

});


module.exports = Name;
