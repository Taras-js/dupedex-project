const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();
app.use(express.json({ extended: true }));
app.use('/api', require("./routes/data.routes"))

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
