const express = require('express')
const {CreateFavorite, getFavorite} = require('../controllers/favorite')
const authentication = require('../middleware/authentication')

const favoriteRouter = express.Router()

favoriteRouter.post('/',authentication,CreateFavorite)
favoriteRouter.get('/',getFavorite)

module.exports= favoriteRouter