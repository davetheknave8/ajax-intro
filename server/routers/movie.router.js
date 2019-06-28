const express = require( 'express');

//This makes a Router object for us to see
const router = express.Router();

//Move routes ( GET/POST ) from server.js into here
//Setup route to return movies
const movieData = require('./modules/movie.module.js')
router.get('/', (req, res) => {
    res.send(movieData);
})

//Post new movie to server
router.post('/', (req, res) => {
    let newMovie = req.body;
    console.log(`Adding the movie: ${newMovie}`)
    //Add it onto the array of movies
    movieData.push(newMovie);
    res.sendStatus(201);
})


module.exports = router;