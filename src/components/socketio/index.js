import { io } from "socket.io-client"

const socketio = io("http://localhost:3060");

socketio.on("connect", () => {
  console.log("conectado");
})

export default socketio