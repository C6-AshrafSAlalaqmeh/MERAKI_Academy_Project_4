const express =require('express')
const { createListFood, getAllList } = require('../controllers/list')
const authentication = require('../middleware/authentication')

const listRouter = express.Router()

listRouter.post('/',createListFood)
listRouter.get('/' ,getAllList)
//,authentication
module.exports =listRouter