import tradeSchema from "../schemas/tradeSchema.js";

export function schemaTradeValidation(req, res, next) {
  const trade = req.body;

  const validation = tradeSchema.validate(trade);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}