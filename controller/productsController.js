const products = require("../utils/product");
const stockPrice = require("../utils/stock-price");

exports.getProducts = (req, res, next) => {
  res.json({
    message: "these are the products",
    products: products,
  });
};

exports.singleProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const prod = products.find((prod) => prod.id == id);

    if (!prod) {
      const error = new Error("product not found");
      error.statusCode = 404;
      throw error;
    }
    res.json({
      message: "single prod found",
      product: prod,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
exports.getStockPrice = (req, res, next) => {
  try {
    const { sku } = req.params;

    if (!sku) {
      const error = new Error("Please provide the id");
      error.statusCode = 400;
      throw error;
    }

    const obj = stockPrice[sku];

    if (!obj) {
      const error = new Error("Stock price not found");
      error.statusCode = 404;
      throw error;
    }

    res.json({
      message: "The object found",
      stockPrice: obj,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
