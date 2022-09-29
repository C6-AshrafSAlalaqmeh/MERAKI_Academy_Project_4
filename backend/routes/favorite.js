const express = require('express')
const {CreateFavorite, getFavorite, deleteFavorite} = require('../controllers/favorite')
const authentication = require('../middleware/authentication')

const favoriteRouter = express.Router()

favoriteRouter.post('/',authentication,CreateFavorite)
favoriteRouter.get('/',authentication,getFavorite)
favoriteRouter.delete("/:id" , deleteFavorite)

module.exports= favoriteRouter