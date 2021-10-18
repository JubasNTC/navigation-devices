'use strict';

const { User } = require('models');

class UserService {
  /**
   * Creating new user
   *
   * @async
   * @param {Object} credential Information about user.
   * @param {String} credential.email The email of the user.
   * @param {String} credential.fullName Full user name.
   * @return {Promise<number>} User id.
   */
  async createUser(credential) {
    const {
      dataValues: { id },
    } = await User.create(credential);

    return id;
  }

  /**
   * Getting user by id
   *
   * @async
   * @param {Number} id User id.
   * @return {Promise<Object>} User.
   */
  async getUserById(id) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error(`user with id: ${id} not found`);
    }

    return user;
  }

  /**
   * Deleting User by id
   *
   * @async
   * @param {Number} id User id.
   * @return {Promise<undefined>}
   */
  async deleteUserById(id) {
    await User.destroy({
      where: { id },
    });
  }
}

const userService = new UserService();

module.exports = userService;
