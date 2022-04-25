const { Router } = require("express");
const Product = require("../models/Products");
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

module.exports = router