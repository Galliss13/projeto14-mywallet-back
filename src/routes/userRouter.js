import { Router } from "express";
import { getMovements, postMoviments } from "../controllers/userController.js"
import { authToken } from "../middlewares/authToken.js";

const userRouter = Router()

userRouter.get("/transactions", authToken, getMovements)
userRouter.post("/transactions",authToken, postMoviments)

export default userRouter