const express = require('express')
const { register , login} = require('../controllers/register')

const userRouter = express.Router()

userRouter.post('/register' , register)
userRouter.post('/login' , login)


module.exports= userRouter