const express = require("express");
const {
  createNewProduct,
  getProductByName,
  updateproduct,
} = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/", createNewProduct);
productRouter.get("/search", getProductByName);
productRouter.put("/:id", updateproduct);
module.exports = productRouter;
