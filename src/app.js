const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos (Seu HTML vai aqui)
app.use(express.static(path.join(__dirname, '../public')));

// Rotas de API (Placeholder para o próximo passo)
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', system: 'Igreja CRM - Estado Zero' });
});

// Inicialização
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📂 Servindo frontend de /public`);
});