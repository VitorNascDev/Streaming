const path = require('path')
const fs = require('fs')
const { MongoClient } = require('mongodb')

const database = new MongoClient(process.env.MongoUrl).db('Streaming').collection('Video')

// const getAllVideos = (req, res) => {

//     // Return a array containing all the videos filename

//     fs.readdir(process.env.FOLDER, (err, files) => {

//         // Reading the Public Folder videos and cleaning the duplicates
//         // Check if the folder is empty

//         if (files) {

//             let newArray = [...new Set(
//                 files.map(data => data.slice(0, data.length - 4))
//             )]
    
//             res.send({
//                 empty: false,
//                 content: newArray
//             })
//         } else {
//             res.send({
//                 empty: true,
//             })
//         }

//     })
// }


const getAllVideos = async (req, res) => {
    const data = await database.find().toArray()

    res.send(data)
}

module.exports = {
    getAllVideos
}