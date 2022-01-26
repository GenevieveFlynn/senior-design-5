const express = require('express');

const { postUser } = require('../controllers/user.controller');

const router = express.Router();

// API Routes which map to controllers 

router.post('/users', postUser);

module.exports = router;

// user endpoint 
// router.post('/user', user.postUser)

// router.get('/user/create', userController.createuserget);
// router.get('/user/:id, userController.userdetailget)

// contract endpoint 

// wallet endpoints 

// this is used to chain together the contorller functions

// import controllers and chain together the functions

