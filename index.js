const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

console.log("new update");
app.use(cors());

app.listen(3000, () => console.log("server runing in port 3000"));
