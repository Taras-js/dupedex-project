const rateLimit = require("express-rate-limit");
const apiLimiter = rateLimit({
    windowMs: 10080 * 60 * 1000, // 1 week
    max: 20, // Limit each IP to 20 requests per `window` (here, per 1 week)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
module.exports = apiLimiter;