const Product = require("../models/products")

const add_product = async (req, res, next) => {
  try {
    let product = Product(req.body)
    await product.save()
    res.send({
      message: "Product added!",
      data: product,
    })
  } catch (error) {
    next({ status: 400, message: error })
  }
};
const update_product = async (req, res, next) => {
  try {
    let response = await Product.updateOne({ _id: req.body._id }, {
      $set: {
        "name": req.body.name,
        "brief": req.body.brief,
        "category": "Electronic",
        "desc": req.body.desc,
        "options": [{
          "resolution": req.body.options.resolution,
          "color": req.body.options.color
        }],
        "brand": req.body.brand,
        "image": req.body.image
      }
    })
    res.send({
      message: "Product updated!",
      response: response
    })
  } catch (error) {
    next({ status: 400, message: error })
  }
};
const getproduct = async (req, res, next) => {
  try {
    let product = await Product.findOne({ _id: req.body._id })
    if (product === null) {
      throw ("Not found")
    }
    res.send({
      message: "Product!",
      data: product,
    })
  } catch (error) {
    next({ status: 400, message: error })
  }
};

const delete_product = async (req, res, next) => {
  try {
    let product = await Product.deleteOne({ _id: req.body._id })
    if (product === null) {
      throw ("Not found")
    }
    res.send({
      message: "Product Deleted"
    })
  } catch (error) {
    next({ status: 400, message: error })
  }
};

module.exports = { add_product, update_product, getproduct, delete_product }