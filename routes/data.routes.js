const { Router } = require("express");
const Product = require("../models/Product");
const {createPathRewriter} = require("http-proxy-middleware/dist/path-rewriter");
// const upload = require("../middleware/upload");
// const auth = require("../middleware/auth.middleware");
const router = Router();

router.get("/data",  async (req, res) => {

  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log('error')
  }
});





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
module.exports = router
