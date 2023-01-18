const { MongoClient } = require('mongodb')
const database = new MongoClient(process.env.MongoUrl)
const loginCollection = database.db('Streaming').collection('Login')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const path = require('path')
const bcrypt = require('bcrypt')

const videoFolder = path.join(__dirname, '../Public/Videos')

const Login = async (req, res) => {

    const userData = {
        username: req.body.username,
        password: req.body.password,
    }

    const queryResult = await loginCollection.findOne({
        username: userData.username
    })

    if (queryResult) {      // Check if User Exists

        bcrypt.compare(userData.password, queryResult.password, (err, result) => {

            if (result) {   // Check if is the correct password and send the token

                res.send(jwt.sign({
                    username: queryResult.username
                }, process.env.Password))

            } else {
                res.send('User or Password wrong !!!')
            }

        })

    } else {
        res.send('User or Password wrong !!!')
    }
}

const Register = async (req, res) => {

    let userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        perfis: req.body.perfis
    }

    let response = {
        registered: false,
        errors: {
            usernameExist: false,
            emailExist: false
        },
        token: ""
    }

    const usernameResult = await loginCollection.findOne({ username: userData.username })
    const emailResult = await loginCollection.findOne({ email: userData.email})

    if (usernameResult) { response.errors.usernameExist = true }
    if (emailResult) { response.errors.emailExist = true }

    if (response.errors.usernameExist == false && response.errors.emailExist == false) {

        await bcrypt.hash(userData.password, 10, (error, result) => {

            userData.password = result

            loginCollection.insertOne(userData)

        })

        response.registered = true
        response.token = jwt.sign({
            username: userData.username,
            email: userData.email
        }, process.env.Password)
    }



    res.send(response)
}

const ProtectTheFiles = (req, res) => {

    const token = req.params.UserToken

    jwt.verify(req.params.UserToken, process.env.Password, (err, decoded) => {          // Verify if the user has a token

        if (err) {                                                                      // If user has the token it will send the file that he wish, else he will receive a acess denied
            res.send('Acess Denied')
        } else {
            res.sendFile(path.join(__dirname, '../', 'Public', 'Videos', String(req.params.data)))
        }
    })
}

module.exports = {
    Login,
    Register,
    ProtectTheFiles
}