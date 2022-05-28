import express from "express"
import http from "http"
import { PORT } from "./config"

const app = express()
const server = http.createServer(app)
const httpServer = server.listen(PORT)

console.log(`Server is running on http://localhost:${PORT}`);

export default httpServer