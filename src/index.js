import { Server as WebSocketServer } from "socket.io"
import httpServer, { app } from "./app"
import sockets from "./sockets"
import { CORS_ORIGIN_URL } from "./config"
import userRoutes from "./routes/user-routes"
import connectMongoDB from "./connectMongoDB"

connectMongoDB()

const io = new WebSocketServer(httpServer, {
  cors: {
    origin: [CORS_ORIGIN_URL]
  }
})

sockets(io)

//ROUTES
app.use(userRoutes)