const express =require('express')
const { createListFood } = require('../controllers/list')

const listRouter = express.Router()

listRouter.post('/',createListFood)

module.exports =listRouter