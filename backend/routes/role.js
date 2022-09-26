const express = require('express')
const {CreateRole} = require('../controllers/role')

const RoleRouter = express.Router()

RoleRouter.post('/', CreateRole )

module.exports = RoleRouter