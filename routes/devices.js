'use strict';

const express = require('express');

const devicesController = require('../controllers/devices');

const router = express.Router();

router.get('/', devicesController.getDevices);

module.exports = router;