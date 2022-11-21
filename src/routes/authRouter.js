import { Router } from "express";
import { login, register } from "../controllers/authController.js"

const authRouter = Router()

authRouter.post("/", login)
authRouter.post("/register", register)

export default authRouter