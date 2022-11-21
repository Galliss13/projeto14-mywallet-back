import joi from 'joi';

const tradeSchema = joi.object({
  date: joi.string().required(),
  value: joi.string().required(),
  description: joi.string().required(),
  type: joi.string().required(),
});

export default tradeSchema;