const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Turma = connection.define(
  "turma",
  {
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  //Paranoid é a opção para criar um "Soft delete" para a tabela
  //deletedAt é o nome da coluna que podemos fazer a alteração
  { paranoid: true, deletedAt: "Time of Deletion" }
);

module.exports = Turma;
