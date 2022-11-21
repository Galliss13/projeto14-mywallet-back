import registerSchema from "../schemas/registerSchema.js";

export function schemaRegisterValidation(req, res, next) {
  const user = req.body;

  const validation = registerSchema.validate(user);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}