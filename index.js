require('dotenv').config()
const express = require('express')
const path = require('path')
const Router = require('./Router/Router')
const app = express()

app.use(express.static(path.join(__dirname, './Public')))
app.use(express.json())
app.use('/', Router)

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is Running on ${process.env.PORT}`)
})