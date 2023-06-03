const Product = require("../models/products");

const add_product = async (req, res, next) => {
  try {
    let product = Product(req.body);
    await product.save();
    console.log(req.body);
    res.send({
      message: "Product added!",
      data: product,
    });
  } catch (error) {
    next({ status: 400, message: error });
  }
};
const update_product = async (req, res, next) => {
  try {
    let product = await Product.findOne({ _id: req.body._id });
    res.send({
      message: "Product added!",
      data: product,
    });
  } catch (error) {
    next({ status: 400, message: error });
  }
};

module.exports = { add_product, update_product };
