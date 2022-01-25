const express = require('express')

const { user } = require('../controllers')

const router = express.Router()

router.post('/user', user.postUser)

module.exports = router

// this is used to chain together the contorller functions

// import controllers and chain together the functions