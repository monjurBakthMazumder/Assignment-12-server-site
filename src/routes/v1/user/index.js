const createUser = require('../../../api/v1/User/controllers/createUser')

const router = require('express').Router()

router.post('/users', createUser)

module.exports = router