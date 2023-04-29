const { DataTypes } = require("sequelize");
const { connection } = require("./database");
const Turma = require("./turma");

const Professor = connection.define("professor", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  materia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Professor pra Turma 1:1

//Um Professor tem uma turma
Professor.hasOne(Turma);

module.exports = Professor;
