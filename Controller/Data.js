const path = require('path')
const fs = require('fs')

const getAllVideos = (req, res) => {

    // Return a array containing all the videos filename

    fs.readdir(path.join(__dirname, '../Public/Videos'), (err, files) => {

        // Reading the Public Folder videos and cleaning the duplicates

        res.send([...new Set(
            files.map(data => data.slice(0, data.length - 4))
        )])
    })
}

module.exports = {
    getAllVideos
}