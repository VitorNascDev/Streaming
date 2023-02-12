require('dotenv').config()
const express = require('express')
const path = require('path')
const Router = require('./Router/Router')
const UploadFilesToDb = require('./Scripts/UploadFilesToDB')
const app = express()

// Initialize Function
UploadFilesToDb()

app.use('/Public', express.static(path.join(process.env.FOLDER)))
app.use(express.json())
app.use('/', Router)

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is Running on ${process.env.PORT}`)
})