'use strict';

const express = require('express');

const devicesRouter = require('./devices');
const usersRouter = require('./users');

const router = express.Router();

router.use('/devices', devicesRouter);

router.use('/users', usersRouter);

router.get('/favicon.ico', (req, res) => res.sendStatus(200));

module.exports = router;