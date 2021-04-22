const { DataTypes } = require("sequelize");
const db = require("../db");
const Bidding = db.define("bidding", {
  
  currbid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
});
module.exports = Bidding;