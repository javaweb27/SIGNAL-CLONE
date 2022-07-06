import { model, Schema } from "mongoose"

const schema = new Schema({
  email: String,
  password: String,
  endDate: Number
})

const ModelUser = model("users", schema)

export default ModelUser
