console.log('hello');

$(document).ready( onReady );

function onReady() {
    //ajas is asynchronous $.ajax return a Promise
    //that Promise says that when the server responds
    //we do the thing in the `then`
    getAllMovies();
    //we don't wait for the server to respond before moving on
    //to run this next line of code, we just do the requesting
    console.log('down here');

   $('#add-movie').on('click', handleAddMovie);
};

function renderMovies(movieList){
    $('#movies').empty();
    for(let currentMovie of movieList){
        $('#movies').append(`<tr><td>${currentMovie.name}</td><td>${currentMovie.movie}</td></tr>`)
    };
};

function handleAddMovie(){
    //Get info from input fields
    let name = $('#in-name').val();
    let movie = $('#in-movie').val();

    $.ajax({
        method: 'POST',
        url: '/movies',
        data: {
            name: name,
            movie: movie
        }
    })
    .then( function (response) {
        //POST (add movie) was good
        //Clear out input fields on form
        $('#in-name').val('');
        $('#in-movie').val('');
        
        //GET all my movies again, so the new one shows on the page
        getAllMovies();
    })
    .catch( function(error) {
        console.log(`Something bad happened... `);
        alert('Something bad happened. Try again later.');
    })

}

function getAllMovies(){
    $.ajax({
        method: 'GET',
        url: '/movies'
    }).then(function (response) {
        console.log(`Got some movies!!!`, response);
        renderMovies(response);
    }).catch(function (error) {
        console.log(`Something bad happened... `);
        alert('Something bad happened. Try again later.');
    })
}
