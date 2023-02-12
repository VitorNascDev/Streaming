const fs = require('fs')
const { MongoClient } = require('mongodb')

const database = new MongoClient('mongodb://localhost:27017/').db('Streaming').collection('Video')

module.exports = () => {
    fs.readdir(process.env.FOLDER, (err, files) => {
        let newArray = [...new Set(files.map(data => data.slice(0, data.length - 4)))]
        .map(data => {
            return {
                Title: data,
                Category: []
            }
        })

        newArray.forEach(async data => {
            if (!await database.findOne(data)) {
                await database.insertOne(data)
            }
        })
    })

}