const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
    typeOf: {
        type: String
    },
    name: {
        type: String
    },
    img: {
        type: String
    },
    techStack: {
        type: Array
    },
    url: {
        type: String
    },
    gitHub: {
        type: String
    },
    description: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: {
        type: Object
    }
})

module.exports = mongoose.model('Projects', projectsSchema)