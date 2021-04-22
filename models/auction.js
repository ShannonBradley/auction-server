const { DataTypes } = require("sequelize");
const db = require("../db");

const Auction = db.define("auction", {

  rescueid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  itemdesc: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  minbid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  winbid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});


module.exports = Auction;
