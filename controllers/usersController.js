'use strict';

const userService = require('services/userService');
const validator = require('./usersControllerValidator');

module.exports = {
  getUser: async (req, res) => {
    const {
      params: { id },
    } = req;

    try {
      const user = await userService.getUserById(id);

      return res.status(200).json({ user });
    } catch (e) {
      console.error(e);

      return res.status(500);
    }
  },

  createUser: async (req, res) => {
    const { body: credential } = req;

    try {
      await validator.createUser.validateAsync(credential);
    } catch (e) {
      console.error(e);

      return res.status(400).json({ message: 'Bad credential' });
    }

    try {
      const id = await userService.createUser(credential);

      return res.status(200).json({ id });
    } catch (e) {
      console.error(e);

      return res.sendStatus(500);
    }
  },

  deleteUser: async (req, res) => {
    const {
      params: { id },
    } = req;

    try {
      await userService.deleteUserById(id);

      return res.sendStatus(200);
    } catch (e) {
      console.error(e);

      return res.sendStatus(500);
    }
  },
};
