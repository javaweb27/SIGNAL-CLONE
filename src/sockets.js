export default (io) => {
  io.on("connection", (socket) => {
    console.log("A user has been connected")

    socket.on("client:chat", (name, message) => {
      io.emit("server:chat", name, message)
    })
  })
}