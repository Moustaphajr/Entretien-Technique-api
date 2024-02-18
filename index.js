const express = require("express");
const router = require("./routes/route.js");
const connect = require("./config/database");
const cors = require("cors");

require("dotenv").config();

connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(router);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
