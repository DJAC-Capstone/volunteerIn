module.exports = (io) => {
  io.on('connect', (socket) => {
    socket.on('send-message', (message) => {
      socket.broadcast.emit('get-message', message);
    });
  });
};
