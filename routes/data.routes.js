const { Router } = require("express");
const Product = require("../models/Products");
const router = Router();
const apiLimiter = require("../middleware/rateLimit");

router.get("/data",  apiLimiter, async (req, res) => {
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
      .limit(10)
      .lean();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log("error");
  }
});

router.get("/reviews", apiLimiter, async (req, res) => {
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
router.get("/:id", apiLimiter, async (req, res) => {
  console.log(req);
  try {
    const product = await Product.findById(10);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});
router.post("/search", apiLimiter, async (req, res) => {
  try {
    let payload = req.body.payload.trim();
    let search = await Product.find(
      { brand_name: { $regex: new RegExp("^" + payload + ".*", "i") } },
      {
        brand_name: 1,
        prod_name: 1,
        prod_link: 1,
        price: 1,
        category: 1,
        img_link: 1,
        Benefits: 1,
        Details: 1,
        Usage: 1,
        Ingredients: 1,
        reviews: 1,
        key_ingredients: 1,
      }
    )
      .limit(10)
      .exec();

    search = search.slice(0, 10);
    res.json(search);
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так" });
    console.log("error");
  }
});
module.exports = router