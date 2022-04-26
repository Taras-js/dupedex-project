const { Router } = require("express");
const Product = require("../models/Products");
const router = Router();

router.get("/data",  async (req, res) => {

    try {
        const products = await Product.find({}, {id: 1, brand_name: 1,
    prod_name: 1, prod_link: 1, img_link: 1, reviews: 1
    }).limit(5).lean();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так" });
        console.log('error')
    }
});
router.get("/data/reviews",  async (req, res) => {

    try {
        const products = await Product.find({}, {id: 1, brand_name: 1
        }).lean();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так" });
        console.log('error')
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
router.post("/search",  async (req, res) => {

    try {
        let payload = req.body.payload.trim()
        let search = await Product.find({brand_name: {$regex: new RegExp('^'+payload+'.*','i')}}, {brand_name: 1}).limit(10).exec()

        search = search.slice(0, 10)
        res.json(search);
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так" });
        console.log('error')
    }
});
module.exports = router