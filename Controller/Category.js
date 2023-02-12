const { MongoClient, ObjectId } = require('mongodb')
const database = new MongoClient(process.env.MongoUrl).db('Streaming').collection('Video')

const getCategoryList = async (req, res) => {
    let categoryList = await database.findOne({ Title: req.body.Title })

    if (categoryList) {
        res.send(categoryList.Category)
    }
}

module.exports = {
    getCategoryList
}