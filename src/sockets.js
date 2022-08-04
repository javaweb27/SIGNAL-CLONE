export default (io) => {
  io.on("connection", (socket) => {

    console.log("A user has been connected")

    //message is an object with "body" and "from" props
    //ignore "from" prop and use socket.id 
    socket.on("client:chat", (message) => {
      io.emit("server:chat", {
        from: socket.id,
        body: message.body
      })
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
    });
  })
}