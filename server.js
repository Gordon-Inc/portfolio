// Dependancies
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Routers
const homepageRouter = require('./routes/homepage')
const testRouter = require('./routes/test')
const accomplishmentsRouter = require('./routes/accomplishments');
const myJourneyRouter = require('./routes/myjourney')
const projectsRouter = require('./routes/projects')
const techStackRouter = require('./routes/techstack')

// Connection String
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Connection Tests
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.static('build'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/test', testRouter)
app.use('/home', homepageRouter)
app.use('/accomplishments', accomplishmentsRouter)
app.use('/myJourney', myJourneyRouter)
app.use('/projects', projectsRouter)
app.use('/techStack', techStackRouter)

app.listen(PORT, () => console.log('Server Started'))