const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true
    },

})



module.exports = mongoose.model('blog', BlogSchema)