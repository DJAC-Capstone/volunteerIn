module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('send-message', (message) => {
      io.emit('get-message', message);
    });
  });
};
