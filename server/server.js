const express = require('express');

//Setup our app
const app = express();

//Setup static files
app.use( express.static( 'server/public'));

//Setup route to return movies
const movieData = require('./modules/movie.module.js')
app.get( '/movies', (req, res) => {
    res.send(movieData);
})


//Start the server listening - do this last, after setting up routes, and all the things
const PORT = 5000;
app.listen( PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});