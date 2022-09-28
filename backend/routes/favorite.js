const express = require('express')
const {CreateFavorite, getFavorite} = require('../controllers/favorite')

const favoriteRouter = express.Router()

favoriteRouter.post('/', CreateFavorite)
favoriteRouter.get('/',getFavorite)

module.exports= favoriteRouter