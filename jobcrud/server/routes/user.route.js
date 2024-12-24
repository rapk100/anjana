const express = require('express')
const userservice = require('../service/user.service')

const router = express.Router()

router.post('/signup',userservice.signup)

router.post('/login',userservice.login)
module.exports = router