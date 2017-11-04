var socket = io();
socket.on('reload',function(){
    window.location.reload();
})