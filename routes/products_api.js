const express = require("express");
const {
  add_product,
  update_product,
  getproduct,
} = require("../controllers/product-api");
const route = express.Router();

route.post("/add", add_product);
route.put("/update", update_product);
route.get("/myproduct", getproduct);
// route.delete("/delete", delete_product);

module.exports = route;
