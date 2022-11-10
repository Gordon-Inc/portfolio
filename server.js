require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const homepageRouter = require('./routes/homepage')
const testRouter = require('./routes/test')
const accomplishmentsRouter = require('./routes/accomplishments');
const myJourneyRouter = require('./routes/myjourney')
const projectsRouter = require('./routes/projects')
const techStackRouter = require('./routes/techstack')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const PORT = process.env.PORT || 4000;

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

app.use('/test', testRouter)
app.use('/home', homepageRouter)
app.use('/accomplishments', accomplishmentsRouter)
app.use('/myJourney', myJourneyRouter)
app.use('/projects', projectsRouter)
app.use('/techStack', techStackRouter)

app.listen(PORT, () => console.log('Server Started'))