const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('build'));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})