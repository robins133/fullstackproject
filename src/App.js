/*
    Name: James Robinson
    School: Rowan University
    Class: Web Programming CS04305
    Assignment: P1 - Initialization & API Design
    Date: 3-26-2024
    Instructor: Professor Marquise N. Pullen

    Description: Set up express server, initialized react app, designed
    restful API endpoints, basic html page

    Honor Pledge: I pledge that this work is entirely my own

    //password db 
*/

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// mongoose
/*
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://robins133:wulf60wnRDvBr3xj@cluster0.mtmjwqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
*/

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'client/public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Mock movie data
let movies = [
    { id: 1, title: 'Inception', rating: 8 },
    { id: 2, title: 'Ace Ventura Pet Detective', rating: 9 },
    { id: 3, title: 'Iron Man', rating: 7 },
];

// Route to get all movies
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

// Route to get a single movie by ID
app.get('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find((m) => m.id === id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

// Route to create a new movie
/*
app.post('/api/movies', (req, res) => {
    const { title, rating } = req.body;
    const id = movies.length + 1;
    const newMovie = { id, title, rating };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});
*/

// Route to create a new movie
app.post('/api/movies', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        console.error('Error creating movie', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to update an existing movie
app.put('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, rating } = req.body;
    const index = movies.findIndex((m) => m.id === id);
    if (index !== -1) {
        movies[index] = { id, title, rating };
        res.json(movies[index]);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

// Route to delete an existing movie
app.delete('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    movies = movies.filter((m) => m.id !== id);
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// mongoose DB stuff

/*
const movieSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    director: String,
    releaseYear: Number,
    genres: [String],
    createdAt: { type: Date, default: Date.now }
});

// Contact Form Submission Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    submissionDate: { type: Date, default: Date.now }
});

// Define Movie Model
const Movie = mongoose.model('Movie', movieSchema);

// Define Contact Form Model
const ContactForm = mongoose.model('ContactForm', contactSchema);

module.exports = {
    Movie,
    ContactForm
};
*/
