const mongoose = require('mongoose');

const techstackSchema = mongoose.Schema({
    type: {
        type: String
    },
    name: {
        type: String
    },
    startDate: {
        type: String
    },
    logo: {
        type: String
    }
})

module.exports = mongoose.model('techstack', techstackSchema)
