const { DataTypes } = require("sequelize");
const { connection } = require("./database");
const Turma = require("./turma");

const Aluno = connection.define("aluno", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

//Turma para Aluno 1:N

//Turma tem vários Alunos
Turma.hasMany(Aluno);
//Aluno pertence a Turma
Aluno.belongsTo(Turma);

module.exports = Aluno;
