import { connect } from "mongoose"
import { MONGODB_URI } from "./config"

const connectMongoDB = async () => {
  console.log("-connecting to db...")
  try {
    await connect(MONGODB_URI)
    console.log("-connect to db: ok")
  } catch (error) {
    console.error("-error to connect to db:", error)
  }
}

export default connectMongoDB