'use strict';

const deviceService = require('services/deviceService');
const validator = require('./devicesControllerValidator');

module.exports = {
  getDevice: async (req, res) => {
    const {
      params: { id },
    } = req;

    try {
      const device = await deviceService.getDeviceById(id);

      return res.status(200).json(device);
    } catch (e) {
      console.error(e);

      return res.status(500).json({ message: e.message });
    }
  },

  createDevice: async (req, res) => {
    const { body: credential } = req;

    try {
      await validator.createDevice.validateAsync(credential);
    } catch (e) {
      console.error(e);

      return res.status(400).json({ message: 'Bad credential' });
    }

    try {
      const id = await deviceService.createDevice(credential);

      return res.status(200).json({ id });
    } catch (e) {
      console.error(e);

      return res.sendStatus(500);
    }
  },

  deleteDevice: async (req, res) => {
    const {
      params: { id },
    } = req;

    try {
      await deviceService.deleteDeviceById(id);

      return res.sendStatus(200);
    } catch (e) {
      console.error(e);

      return res.sendStatus(500);
    }
  },
};
