// const { Router } = require("express");
// const Image = require("../models/Image");
// const upload = require("../middleware/upload");
// const auth = require("../middleware/auth.middleware");
// const router = Router();
// const { limits } = upload;
//
// router.post("/upload", upload.single("avatar"), auth, async (req, res) => {
//   try {
//     if (req.file.size < limits.fileSize) {
//       const image = new Image({
//         name: req.file.originalname,
//         text: req.body.text,
//         path: req.file ? req.file.path : "",
//         size: req.file.size,
//         user: req.user.userId,
//       });
//       const file = req.file;
//       await image.save();
//       res.status(201).json({ image, file });
//     } else {
//       res
//         .status(400)
//         .json({ message: "Объем загружаемой картинки не более 5 мегабайт" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Что-то пошло не так" });
//   }
// });
// router.get("/", auth, async (req, res) => {
//   try {
//     const images = await Image.find({ user: req.user.userId });
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ message: "Что-то пошло не так" });
//   }
// });
// router.get("/last", auth, async (req, res) => {
//   try {
//     const image = await Image.find({ user: req.user.userId });
//     res.json(image);
//   } catch (error) {
//     res.status(500).json({ message: "Что-то пошло не так" });
//   }
// });
// router.get("/:id", auth, async (req, res) => {
//   try {
//     const image = await Image.findById(req.params.id);
//     res.json(image);
//   } catch (error) {
//     res.status(500).json({ message: "Что-то пошло не так" });
//   }
// });
// module.exports = router


