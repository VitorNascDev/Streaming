const Router = require('express').Router()
const controller = require('../Controller/Controller')

Router.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

Router.post('/Auth/Login', controller.Login)
Router.post('/Auth/Register', controller.Register)

module.exports = Router