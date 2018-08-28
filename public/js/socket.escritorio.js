//Comando para establecer la comunicacion
var socket = io();

//Función que indica que se tiene un canal de comunicacion entre el servidor y el cliente
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con servidor');
});

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');


if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);


$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay Tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);
    });
});