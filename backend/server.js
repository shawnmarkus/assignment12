const app = require("express")();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

try {
  require("../db/Connection");
} catch (err) {
  console.log(err);
}

app.use(express.json());

app.use(cookieParser(""));

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
