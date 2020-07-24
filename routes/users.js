const express = require('express');
const router = express.Router();
const usersController = require('../constrollers/users');

router.get('/users', usersController.listAll);
router.get('/users/:usersId', userssController.showOne);
router.post('/users', usersController.createNewUser);
router.put('/users/:usersId', usersController.updateOneUser);
router.delete('/users/:usersId', usersController.deleteOneUser);

module.exports = router;