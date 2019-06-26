console.log('hello');

$(document).ready( onReady );

function onReady() {
    $.ajax({
        method: 'GET',
        url: '/movies'
    }).then( function (response){
        console.log(`Got some movies!!!`, response);
    })
}