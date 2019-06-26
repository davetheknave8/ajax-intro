console.log('hello');

$(document).ready( onReady );

function onReady() {
    //ajas is asynchronous $.ajax return a Promise
    //that Promise says that when the server responds
    //we do the thing in the `then`
    $.ajax({
        method: 'GET',
        url: '/movies'
    }).then( function (response){
        console.log(`Got some movies!!!`, response);
        renderMovies(response);
    }).catch( function(error){
        console.log(`Something bad happened... `);
        alert('Something bad happened. Try again later.');
    })
    //we don't wait for the server to respond before moving on
    //to run this next line of code, we just do the requesting
    console.log('down here');
};

function renderMovies(movieList){
    $('#movies').empty();
    for(let currentMovie of movieList){
        $('#movies').append(`<tr><td>${currentMovie.name}</td><td>${currentMovie.movie}</td></tr>`)
    };
};