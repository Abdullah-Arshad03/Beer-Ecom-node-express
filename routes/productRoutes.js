const express = require("express");
const router = express.Router();
const productsController = require("../controller/productsController");

router.get("/products", productsController.getProducts);
router.get("/stock-price/:sku", productsController.getStockPrice);
router.get("/products/:id", productsController.singleProduct);

module.exports = router;
