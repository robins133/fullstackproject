// app.js
const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./Movie');
const ContactInfo = require('./ContactInfo');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://robins133:wulf60wnRDvBr3xj@cluster0.mtmjwqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

// Route to fetch all movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to fetch all contact info
app.get('/contact', async (req, res) => {
    try {
        const contactInfos = await ContactInfo.find();
        res.json(contactInfos);
    } catch (error) {
        console.error('Error fetching movies', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
