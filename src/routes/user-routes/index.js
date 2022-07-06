import { Router } from "express"
import userLogin from "./userLogin"
import userRegister from "./userRegister"

const router = Router()

router.put("/register", userRegister)
router.post("/login", userLogin)

export default router