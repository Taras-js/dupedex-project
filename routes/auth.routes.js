const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const apiLimiter = require("../middleware/rateLimit");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", apiLimiter, async (req, res) => {
    try {
        const ip = req.ip;
        const candidate = await User.findOne({ ip });
        if (candidate) {
            const token = jwt.sign({ ip }, config.get("jwtSecret"), {
                expiresIn: "24h",
            });
            return res.status(200).json({ token, ip });
        }
        const user = new User({ ip: ip });
        console.log(user)
        await user.save();
        const token = jwt.sign({ ip }, config.get("jwtSecret"), {
            expiresIn: "24h",
        });
        res.status(200).json({ token, ip });
    } catch (e) {
        res.status(500).json({ message: "Error from register" });
    }
});

module.exports = router