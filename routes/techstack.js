const express = require('express');
const router = express.Router();
const techstack = require('../models/techstack')

router.get('/', async (req, res) => {
    try {
        const tech = await techstack.find()
        res.send(tech)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router;