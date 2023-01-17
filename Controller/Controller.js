const { MongoClient } = require('mongodb')
const database = new MongoClient(process.env.MongoUrl)
const loginCollection = database.db('Streaming').collection('Login')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
            
            console.log(result)

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

const Register = (req, res) => {
    res.send('Register')
}

module.exports = {
    Login,
    Register
}