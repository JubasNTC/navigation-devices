'use strict';

const express = require('express');

const usersController = require('controllers/usersController');

const router = express.Router();

router.get('/:id', usersController.getUser);

router.post('/', usersController.createUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;