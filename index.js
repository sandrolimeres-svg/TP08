const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tarefas = [];

app.get('/api/getAll', (req, res) => {
  res.json(tarefas);
});

app.post('/api/add', (req, res) => {
  tarefas.push(req.body);
  res.json({ ok: true });
});

app.delete('/api/remove/:index', (req, res) => {
  const i = parseInt(req.params.index);
  tarefas.splice(i, 1);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});