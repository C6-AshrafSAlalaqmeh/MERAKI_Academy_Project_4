const express = require('express')
const {createNewProduct , getProductByName }= require('../controllers/product')

const productRouter = express.Router()

productRouter.post('/',createNewProduct)
productRouter.get('/search' , getProductByName)

module.exports= productRouter