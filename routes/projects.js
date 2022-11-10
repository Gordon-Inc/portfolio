const express = require('express');
const router = express.Router();
const Projects = require('../models/projects')

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find()
        res.send(projects)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router;