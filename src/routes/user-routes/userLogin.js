import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import ModelUser from "../../models/ModelUser"
import areValidChars from "../../lib/areValidChars"
import { TOKEN_KEY } from "../../config"

export default async function userLogin({ body }, res) {
  if (!areValidChars(body.email)) {
    console.error("\"email\" tiene caracteres invalidos, no se ha registrado el usuario")
    res.sendStatus(403)
    return
  }

  const UserFound = await ModelUser.findOne({ email: btoa(body.email) })

  if (!UserFound || !bcrypt.compareSync(body.password, UserFound.password)) {
    console.error("No existe el usuario o la contraseña es incorrecta")
    res.sendStatus(403)
    return
  }

  jwt.sign({ userData: UserFound }, TOKEN_KEY, { expiresIn: "360s" }, (error, token) => {
    res.json({ token })
  })
}