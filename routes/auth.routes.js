// const { Router } = require("express");
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const { check, validationResult } = require("express-validator");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const router = Router();
//
// router.post(
//   "/register",
//   [
//     check("email", "Некорректный email").isEmail(),
//     check("password", "Минимальная длина пароля 6 сиволов").isLength({
//       min: 6,
//     }),
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//           message: "Некорректные данные при регистрации",
//         });
//       }
//       const { email, password } = req.body;
//       const candidate = await User.findOne({ email });
//       if (candidate) {
//         return res
//           .status(400)
//           .json({ message: "Пользователь с таким email уже существует" });
//       }
//       const hashedPassword = await bcrypt.hash(password, 12);
//       const user = new User({ email, password: hashedPassword });
//       await user.save();
//       res.status(201).json({ message: "Вы зарегистрированы" });
//     } catch (e) {
//       res.status(500).json({ message: "Error from register" });
//     }
//   }
// );
//
// router.post(
//   "/login",
//   [
//     check("email", "введите корректный email").normalizeEmail().isEmail(),
//     check("password", "Введите пароль").exists(),
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//           message: "Некорректные данные при входе в систему",
//         });
//       }
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: "Пользователь не найден" });
//       }
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res
//           .status(400)
//           .json({ message: "Неверный пароль, попробуйте еще раз" });
//       }
//       const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
//         expiresIn: "1h",
//       });
//       res.status(200).json({ token, userId: user.id });
//     } catch (e) {
//       res.status(500).json({ message: "Error from register" });
//     }
//   }
// );
//
// module.exports = router

