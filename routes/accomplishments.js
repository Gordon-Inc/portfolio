const express = require('express');
const router = express.Router();
const Accomplishments = require('../models/accomplishments')

router.get('/', async (req, res) => {
    try {
        const accomplishments = await Accomplishments.find()
        res.send(accomplishments)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router;