const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

console.log("new update");
app.use(cors());

if (true) {
  console.log("vanilla");
} else {
  let value = false;
  if (!value) {
    console.log("no chocolate");
  } else {
    console.log("may be ice cream");
  }
}

app.listen(3000, () => console.log("server runing in port 3000"));
