'use strict';

const express = require('express');

const devicesController = require('controllers/devicesController');

const router = express.Router();

router.get('/:id', devicesController.getDevice);

router.post('/', devicesController.createDevice);

router.delete('/:id', devicesController.deleteDevice);

module.exports = router;
