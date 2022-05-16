const { Router } = require("express");
const Product = require("../models/Products");
const router = Router();

router.get("/data", async (req, res) => {
  try {
    const products = await Product.find(
        {},
        {
          id: 1,
          brand_name: 1,
          prod_name: 1,
          prod_link: 1,
          img_link: 1,
          reviews: 1,
        }
    )
        .limit(5)
        .lean();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log("error");
  }
});
router.get("/data/reviews", async (req, res) => {
  try {
    const products = await Product.find(
        {},
        {
          id: 1,
          brand_name: 1,
        }
    ).lean();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log("error");
  }
});
router.get("/data/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});
router.post("/search", async (req, res) => {
  try {
    let payload = req.body.payload.trim();
    let search = await Product.find(
        { brand_name: { $regex: payload, $options: "i" } },
        { brand_name: 1, prod_name: 1 }
    )
        .limit(10)
        .exec();
    res.json(search);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log("error");
  }
});
router.post("/id", async (req, res) => {
  try {
    let payload = req.body.payload;
    const product = await Product.findOne({ id: payload });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});
router.get('/products', async (req, res) => {
  try {
    let str = req.query.ids
    let regexp = /\d+/g;
    let result = str.match(regexp)
    res.json(result);
    console.log(result)
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log('error')
  }
})

module.exports = router
