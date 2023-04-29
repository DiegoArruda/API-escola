const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Turma = connection.define("turma", {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  serie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Turma;
