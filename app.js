const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();
app.use(express.json({ extended: true }));
app.use('/api', require("./routes/data.routes"))


app.get('/products', async (req, res) => {
  try {
    let str = req.query.ids
    let regexp = /\d+/g;
    let result = str.match(regexp)
    res.json(result);
  } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так" });
      console.log('error')
  }
})

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {});
    app.listen(PORT, () => console.log(`App is started on port ${PORT}...`));
  } catch (e) {
    console.log("server error", e.message);
    process.exit(1);
  }
}

start();
