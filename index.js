const express = require("express");
const cors = require("cors");
const connectDb = require("./src/configs/connectDb");
const app = express();

app.use(cors());

const PORT = 3001;

app.get("/hello", (_req, res) => {
  res.send("<h1>Server api</h1>");
});

connectDb();

app.listen(PORT, (err) => {
  if (err) {
    console.log("err", err);
    return;
  }

  console.log(`Server starting at http:${PORT}`);
});
