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
    })
    console.log('down here');
}