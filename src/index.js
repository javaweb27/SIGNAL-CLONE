import { Server as WebSocketServer } from "socket.io"
import httpServer from "./app"
import sockets from "./sockets"
import { CORS_ORIGIN_URL } from "./config"

const io = new WebSocketServer(httpServer, {
  cors: {
    origin: [CORS_ORIGIN_URL]
  }
})

sockets(io)