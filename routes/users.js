const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users', usersController.listAll);
router.get('/users/:usersId', usersController.showOne);
router.post('/users', usersController.createNewUser);
router.put('/users/:usersId', usersController.updateOneUser);
router.delete('/users/:usersId', usersController.deleteOneUser);

module.exports = router;