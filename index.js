const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const UserRoute = require("./Route/auth")

console.log("new update");
app.use(cors());
app.use("/",UserRoute)
console.log("🍫 Feature branch special commit");

console.log("appo thiki commit")

// index.js  (change these exact lines)
if (true) {
  console.log("vanilla");
} else {
  console.log("no vanilla");
}

console.log("innoru changes at 2:00pm")
console.log("create new feature");




app.listen(3000, () => console.log("server runing in port 3000"));
