import { Router } from "express";
import { getMovements, postMoviments } from "../controllers/userController.js"
import { authToken } from "../middlewares/authToken.js"
import { schemaTradeValidation } from "../middlewares/tradeValidate.js";

const userRouter = Router()

userRouter.get("/transactions", authToken, getMovements)
userRouter.post("/transactions", schemaTradeValidation, authToken, postMoviments)

export default userRouter