import { io } from "socket.io-client"

const socketio = io(import.meta.env.VITE_NODE_API);
socketio.on("connect", () => {
  console.log("conectado");
})

export default socketio