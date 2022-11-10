const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send('Hello MongoDB!')
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = router;