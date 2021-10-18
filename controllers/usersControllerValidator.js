const Joi = require('joi');

module.exports = {
  createUser: Joi.object({
    email: Joi.string()
      .email()
      .max(100)
      .required(),

    fullName: Joi.string()
      .min(1)
      .max(100)
      .required(),
  }),

};
