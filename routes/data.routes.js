const { Router } = require("express");
const Product = require("../models/Products");
const router = Router();
const apiLimiter = require("../middleware/rateLimit");

router.get("/data", apiLimiter, async (req, res) => {
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
    res.status(500).json({ message: "Something goes wrong" });
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
    res.status(500).json({ message: "Something goes wrong" });
    console.log("error");
  }
});

router.post("/search", apiLimiter, async (req, res) => {
  try {
    let payload = req.body.payload.trim();
    let search = await Product.find(
      { $or: [{prod_name: { $regex: payload, '$options': 'i' }}, {brand_name: { $regex: payload, '$options': 'i' }}]  },
      {
        brand_name: 1,
        prod_name: 1

      }
    )
      .limit(8)
      .exec();

    // search = search.slice(0, 10);
    res.json(search);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
    console.log("error");
  }
});
router.post("/id", async (req, res) => {
  try {
    let payload = req.body.payload;
    const product = await Product.findOne({ id: payload });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something goes wrong" });
  }
});

router.post("/products", async (req, res) => {
  try {
    let payload = req.body.payload;
    const product = await Product.findOne({ id: payload });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong" });
    console.log("error");
  }
});

module.exports = router;
