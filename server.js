const express = require('express');
const app = express();
const pool = require('./db/connection');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})