const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Api Connected hi nihal");
});

app.listen(80, () => {
  console.log("Server listening on port 80");
});
