const express = require('express');
const router = express.Router();
const myjourney = require('../models/myjourney')

router.get('/', async (req, res) => {
    try {
        const journey = await myjourney.find()
        res.send(journey)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router;