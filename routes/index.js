const routes = require('express').Router();
const baseController = require('../controllers')

routes.get('/', baseController.returnAnotherPerson)

module.exports = routes;  