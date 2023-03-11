const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DB_LINK)
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log("thrown err : " + err.message));
