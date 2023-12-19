const express = require('express')
const accessController = require('../../controllers/access.controller')
const route = express.Router()


//signup
route.post('/shop/signup',accessController.signUp)

module.exports = route