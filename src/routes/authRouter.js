import { Router } from "express";
import { login, register } from "../controllers/authController.js"
import { schemaRegisterValidation } from "../middlewares/registerValidate.js";
import { schemaLoginValidation } from "../middlewares/loginValidate.js";

const authRouter = Router()

authRouter.post("/", schemaLoginValidation, login)
authRouter.post("/register", schemaRegisterValidation, register)

export default authRouter