import { io } from "socket.io-client"

const socketio = io(import.meta.env.VITE_NODE_API || "http://localhost:3060");
socketio.on("connect", () => {
  console.log("socket.io connect");
})

export default socketio