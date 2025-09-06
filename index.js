const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

console.log("new update");
app.use(cors());

if (true) {
  console.log("ice cream");
} else {
  console.log("no ice cream");
}

console.log("create new feature");

app.listen(3000, () => console.log("server runing in port 3000"));
