import express from "express"
import http from "http"
import cors from "cors"
import { CORS_ORIGIN_URL, PORT } from "./config"

const app = express()
const server = http.createServer(app)
const httpServer = server.listen(PORT)

console.log(`Server is running on http://localhost:${PORT}`)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: [CORS_ORIGIN_URL]
}))

export { app }
export default httpServer