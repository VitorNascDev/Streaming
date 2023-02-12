const { MongoClient, ObjectId } = require('mongodb')
const database = new MongoClient(process.env.MongoUrl).db('Streaming').collection('Video')

const getCategoryList = async (req, res) => {
    // This function get The category array of video
    let categoryList = await database.findOne({ Title: req.body.Title })

    if (categoryList) {
        res.send(categoryList.Category)
    }
}

const getSearchResult = (req, res) => {
    // This function return the array of videos that has a determined category passed on params
    database.find({ Category: { $in: [req.params.search] }}).toArray((error, docs) => {
        res.send(docs)
    })
}

module.exports = {
    getCategoryList,
    getSearchResult
}