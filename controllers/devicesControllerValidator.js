const Joi = require('joi');

module.exports = {
  createDevice: Joi.object({
    user_email: Joi.string().email().max(100).required(),

    mac: Joi.string()
      .pattern(new RegExp(/^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i))
      .required(),

    type: Joi.string().valid('ble', 'wifi', 'locator', 'wifi_rtt').required(),
  }),
};
