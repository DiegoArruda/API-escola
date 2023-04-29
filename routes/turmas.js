const { Router } = require("express");
const Turma = require("../database/turma");

const router = Router();

//CRUD Create , Read, Update, Delete

//Create
router.post("/turmas", async (req, res) => {
  const { numero, serie } = req.body;
  try {
    const novaTurma = await Turma.create({ numero, serie });
    res
      .status(201)
      .json({ message: "Turma criada com sucesso", turma: novaTurma });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Read
router.get("/turmas", async (req, res) => {
  try {
    const listaTurmas = await Turma.findAll();
    res.status(200).json({ message: "Lista de turmas", turmas: listaTurmas });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Read by id
router.get("/turmas/:id", async (req, res) => {
  try {
    const turma = await Turma.findByPk(req.params.id);
    if (turma) {
      res.status(200).json({ message: "Turma Encontrada", turma: turma });
    } else res.status(404).json({ message: "Turma não encontrada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update
router.put("/turmas/:id", async (req, res) => {
  try {
    const { numero, serie } = req.body;
    const turma = await Turma.findByPk(req.params.id);
    if (turma) {
      const turmaAtt = await Turma.update(
        { numero, serie },
        { where: { id: req.params.id } }
      );
      res.status(200).json({
        message: "Turma atualizada",
        turma: turmaAtt,
      });
    } else res.status(404).json({ message: "Turma não encontrada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete
router.delete("/turmas/:id", async (req, res) => {
  const turma = await Turma.findByPk(req.params.id);

  try {
    if (turma) {
      await turma.destroy();
      res.status(200).json({ message: "Turma excluída com sucesso" });
    } else res.status(404).json({ message: "Turma não encontrada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/turmas/restaurar/:id", async (req, res) => {
  try {
    const turma = await Turma.findByPk(req.params.id);

    if (turma) {
      //Função para restaurar a linha excluída
      turma.restore(req.params.id);
      res
        .status(200)
        .json({ message: "Turma Encontrada e restaurada", turma: turma });
    } else res.status(404).json({ message: "Turma não encontrada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
