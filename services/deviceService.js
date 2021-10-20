'use strict';

const { sequelize, Device } = require('models');

class DeviceService {
  /**
   * Creating new device
   *
   * @async
   * @param {Object} credential Information about device.
   * @param {String} credential.user_email The email of the user.
   * @param {String} credential.mас Mac address of the device.
   * @param {String} credential.type Device Type.
   * @return {Promise<number>} Device id.
   */
  async createDevice(credential) {
    const { user_email, mac, type } = credential;

    const [row] = await sequelize.query(`
        INSERT INTO public."devices"
          (user_id, mac, type)
        VALUES
        (
          (
              SELECT u."id" 
              FROM public."users" AS u 
              WHERE email = '${user_email}'
          ),
          '${mac}',
          '${type}'
        );

        SELECT currval(pg_get_serial_sequence('devices', 'id'));
    `);

    const [device] = row;
    const { currval: id } = device;

    return id;
  }

  /**
   * Getting device by id
   *
   * @async
   * @param {Number} id Device id.
   * @return {Promise<Object>} User.
   */
  async getDeviceById(id) {
    const [row] = await sequelize.query(`
      SELECT
        u."full_name" as user_name,
        u."email" as user_email, 
        d."mac",
        d."type",
        d."id"
      FROM public."devices" AS d
      LEFT JOIN public."users" AS u
        ON u."id" = d."user_id"
      WHERE d."id" = ${id};
    `);

    const [device] = row;

    if (!device) {
      throw new Error(`device with id: ${id} not found`);
    }

    return device;
  }

  /**
   * Deleting device by id
   *
   * @async
   * @param {Number} id Device id.
   * @return {Promise<undefined>}
   */
  async deleteDeviceById(id) {
    await Device.destroy({
      where: { id },
    });
  }
}

const deviceService = new DeviceService();

module.exports = deviceService;
