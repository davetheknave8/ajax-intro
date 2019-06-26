const express = require('express');

//Setup our app
const app = express();

//Setup static files
app.use( express.static( 'server/public'));

//When we do a POST and want to get data from a request we need help
//We need body-parser
let bodyParser = require('body-parser');

//Setup route to return movies
const movieData = require('./modules/movie.module.js')
app.get( '/movies', (req, res) => {
    res.send(movieData);
})

//Post new movie to server
app.post( '/movies', (req, res) => {
    let newMovie = ???
    //Add it onto the array of movies
    movieData.push(newMovie);
})
//Start the server listening - do this last, after setting up routes, and all the things
const PORT = 5000;
app.listen( PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});