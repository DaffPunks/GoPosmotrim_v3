function WS(server) {

    const io = require('socket.io')(server);

    console.log('socket.io/started');

    io.on('connection', client => {

        client.on('JOIN_ROOM', (data) => {
            console.log(data);

            client.join(data.roomId);
        });

        client.on('GET_INFO', () => {
            // console.log('client', client);

            io.in('1').clients((err, clients) => {
                console.log(clients); // an array containing socket ids in 'room3'
            });

            // console.log(io.sockets.clients('1'));

        });


        client.on('SEND_MSG', (data) => {
            console.log(data, client.rooms);

            Object.keys(client.rooms).forEach((room) => {
                client.to(room).emit('GET_MSG', data);
            });

            // client.to();
        });



    });

}

module.exports = WS;
