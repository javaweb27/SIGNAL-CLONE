import { config } from "dotenv";
config()

export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 3060
export const CORS_ORIGIN_URL = process.env.CORS_ORIGIN_URL || "http://localhost:3000"