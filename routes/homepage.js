const express = require('express');
const router = express.Router();
const Homepage = require('../models/homepage')

router.get('/', async (req, res) => {
    try {
        const homePage = await Homepage.find()
        res.send(homePage)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router;