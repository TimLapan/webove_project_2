const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
//
// Middleware
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" })); // Замените на адрес вашего фронтенда

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Подключено к MongoDB"))
  .catch((err) => console.error("Ошибка подключения к MongoDB:", err));

// Модель пользователя
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Регистрация пользователя
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Проверка, существует ли пользователь
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Пользователь с таким email уже существует" });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Сохранение пользователя в базе данных
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Пользователь успешно зарегистрирован" });
  } catch (err) {
    res.status(500).json({ message: "Ошибка при регистрации", error: err.message });
  }
});

// Авторизация пользователя
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Проверка существования пользователя
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Неверный email или пароль" });
    }

    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Неверный email или пароль" });
    }

    // Создание JWT
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Успешный вход", token });
  } catch (err) {
    res.status(500).json({ message: "Ошибка при входе", error: err.message });
}
});

// Маршрут для получения данных о текущем пользователе
app.get("/me", async (req, res) => {
const token = req.headers.authorization?.split(" ")[1];

if (!token) {
  return res.status(401).json({ message: "Необходима авторизация" });
}

try {
  // Проверка токена
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Поиск пользователя по ID из токена
  const user = await User.findById(decoded.id).select("-password"); // Исключение пароля из результата

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  res.status(200).json(user);
} catch (err) {
  res.status(401).json({ message: "Неверный или истекший токен" });
}
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Сервер запущен на порту ${PORT}`);
});
