//Comando para establecer la comunicacion
var socket = io();

var label = $('#lblNuevoTicket');

//Función que indica que se tiene un canal de comunicacion entre el servidor y el cliente
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con servidor');
});

//on 'estadoActual'
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});