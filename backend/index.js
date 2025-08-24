const express = require('express');
const cors = require('cors'); // импортируем cors
const app = express();
const PORT = 3001;

// Подключаем CORS сразу, до маршрутов
app.use(cors());

// Главная страница
app.get('/', (req, res) => {
  res.send('Backend работает!');
});

// Тестовый маршрут для frontend
app.get('/api/hello', (req, res) => {
  res.json({ message: "Backend работает и отвечает! 🔧" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
