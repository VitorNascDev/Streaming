const Router = require('express').Router()
const Auth = require('../Controller/Auth')
const Data = require('../Controller/Data')


Router.post('/Auth/Login', Auth.Login)
Router.post('/Auth/Register', Auth.Register)

Router.post('/getAllFiles', Data.getAllVideos)

module.exports = Router