const Router = require('express').Router()
const category = require('../Controller/Category')
const Auth = require('../Controller/Auth')
const Data = require('../Controller/Data')


// Auth Requests
Router.post('/Auth/Login', Auth.Login)          // The login Route
Router.post('/Auth/Register', Auth.Register)    // The Register Route

// User Requests

Router.post('/Auth/getProfiles', Auth.getProfiles)


// Get Video Requests
Router.get('/video/:UserToken/:data', Auth.ProtectTheFiles)   // The Route to get a data
Router.post('/getAllFiles', Data.getAllVideos)     // The route to get a array with all the files inside de video folder

// Category Requests
Router.post('/getCategoryList', category.getCategoryList)

module.exports = Router