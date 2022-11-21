import loginSchema from "../schemas/loginSchema.js";

export function schemaLoginValidation(req, res, next) {
  const user = req.body;

  const validation = loginSchema.validate(user);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}