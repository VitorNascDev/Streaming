const Router = require('express').Router()
const Auth = require('../Controller/Auth')
const Data = require('../Controller/Data')


Router.post('/Auth/Login', Auth.Login)          // The login Route
Router.post('/Auth/Register', Auth.Register)    // The Register Route

Router.get('/video/:UserToken/:data', Auth.ProtectTheFiles)   // The Route to get a data
Router.post('/getAllFiles', Data.getAllVideos)     // The route to get a array with all the files inside de video folder

module.exports = Router