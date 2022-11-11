const mongoose = require('mongoose');

const homepageSchema = mongoose.Schema({
    name: {
        type: String
    },
    myJob: {
        type: String
    },
    whoIAm: {
        type: String
    },
    whatICanDo: {
        type: Array
    },
    recentWork: {
        type: String
    },
    interests: {
        type: Object
    }
})

module.exports = mongoose.model('Homepage', homepageSchema)