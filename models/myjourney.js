const mongoose = require('mongoose');

const journeySchema = mongoose.Schema({
    year: {
        type: Number
    },
    event: {
        type: String
    },
    location: {
        type: String
    },
    jobTitle: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('myjourney', journeySchema)