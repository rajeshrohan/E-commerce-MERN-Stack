const express = require('express'); 
const userController = require('../controller/user');
const router = express.Router();

router
.post('/', userController.createUser)
.get('/', userController.getAllUser)
.get('/:id', userController.getUser)
.put('/:id', userController.replaceUser)
.patch('/:id', userController.updateUser)
.delete('/:id', userController.deleteUser);

exports.router = router;

// product controller are callback functions 
// router are have http methods define 
// while using with server, we can provide thise routes to a specific path
