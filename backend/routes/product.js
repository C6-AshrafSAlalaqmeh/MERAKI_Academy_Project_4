const express = require("express");
const {
  createNewProduct,
  getProductByName,
  updateproduct,
  deleteProduct,
  getAllproduct,
} = require("../controllers/product");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const productRouter = express.Router();

productRouter.post("/",authentication,authorization("write"), createNewProduct);
productRouter.get("/search", getProductByName);
productRouter.get("/" ,getAllproduct)
//, authentication
productRouter.put("/:id", updateproduct);
productRouter.delete("/:id" , deleteProduct )
module.exports = productRouter;
