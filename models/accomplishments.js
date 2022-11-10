const mongoose = require('mongoose');

const accomplishmentsSchema = mongoose.Schema({
    type: {
        type: String
    },
    status: {
        type: String
    },
    title: {
        type: String
    },
    img: {
        type: String
    },
    topics: {
        type: Array
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Accomplishments', accomplishmentsSchema)