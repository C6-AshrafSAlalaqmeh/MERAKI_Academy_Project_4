const express = require("express");
const {
  createNewProduct,
  getProductByName,
  updateproduct,
  deleteProduct,
} = require("../controllers/product");

const productRouter = express.Router();

productRouter.post("/", createNewProduct);
productRouter.get("/search", getProductByName);
productRouter.put("/:id", updateproduct);
productRouter.delete("/:id" , deleteProduct )
module.exports = productRouter;
