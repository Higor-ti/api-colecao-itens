const express = require("express");
const {
  listarItens,
  adicionarItem,
  atualizarItem,
  deletarItem,
} = require("./data");

const router = express.Router();

// Rota GET: Listar itens
router.get("/itens", (req, res) => {
  res.json(listarItens());
});

// Rota POST: Adicionar item
router.post("/itens", (req, res) => {
  const novoItem = {
    id: Date.now().toString(),
    ...req.body,
  };
  res.status(201).json(adicionarItem(novoItem));
});

// Rota PUT: Atualizar item
router.put("/itens/:id", (req, res) => {
  const { id } = req.params;
  const itemAtualizado = atualizarItem(id, req.body);
  if (itemAtualizado) {
    res.json(itemAtualizado);
  } else {
    res.status(404).json({ error: "Item não encontrado" });
  }
});

// Rota DELETE: Deletar item
router.delete("/itens/:id", (req, res) => {
  const { id } = req.params;
  const itemDeletado = deletarItem(id);
  if (itemDeletado) {
    res.json(itemDeletado);
  } else {
    res.status(404).json({ error: "Item não encontrado" });
  }
});

module.exports = router;
