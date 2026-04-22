const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// ROTA TESTE (IMPORTANTE)
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// ROTA SOMA
app.get("/api/soma/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const resultado = a + b;

  res.send(`Resultado: ${resultado}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});