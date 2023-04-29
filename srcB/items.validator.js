const Joi = require("joi");

const itemValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
}).strict(true);

module.exports = { itemValidator };