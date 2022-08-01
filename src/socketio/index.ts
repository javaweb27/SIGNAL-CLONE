import { io } from "socket.io-client"
import { NODE_API } from "../config"

const socketio = io(NODE_API)
socketio.on("connect", () => {
  console.log("socket.io connect")
})

export default socketio