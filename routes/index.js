'use strict';

const express = require('express');

const devicesRouter = require('./devicesRouter');
const usersRouter = require('./usersRouter');

const router = express.Router();

router.use('/devices', devicesRouter);

router.use('/users', usersRouter);

router.get('/favicon.ico', (req, res) => res.sendStatus(200));

module.exports = router;
