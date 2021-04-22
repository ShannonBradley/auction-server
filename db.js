const { Sequelize } = require("sequelize");

const db = new Sequelize("libbyloveauction", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;