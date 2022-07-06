import bcrypt from "bcrypt"
import ModelUser from "../../models/ModelUser"
import areValidChars from "../../lib/areValidChars"
import { emailRegex } from "../../lib/regex"

export default async function userRegister({ body }, res) {
  if (!(body.email && body.password) || !emailRegex.test(body.email)) {
    console.error("Datos incompletos o el formato del email es incorrecto, no se ha registrado el usuario")
    res.sendStatus(403)
    return
  }

  if (!areValidChars(body.email)) {
    console.error("\"email\" tiene caracteres invalidos")
    res.sendStatus(403)
    return
  }

  const UserFound = await ModelUser.findOne({ email: btoa(body.email) })

  if (UserFound) {
    console.log("El usuario ya existe")
    res.sendStatus(403)
    return
  }

  const newUser = new ModelUser({
    email: btoa(body.email),
    password: bcrypt.hashSync(body.password, 10),
    endDate: Math.trunc((new Date).getTime() / 1000) + 127
  })

  const UserRegistered = await newUser.save()

  console.log("Usuario registrado correctamente")

  res.json({
    email: atob(UserRegistered.email),
    password: UserRegistered.password
  })

  setTimeout(async () => {
    await ModelUser.deleteOne({ email: btoa(body.email) })

    console.log("Un usuario ha sido eliminado automaticamente")
  }, 127000)
}