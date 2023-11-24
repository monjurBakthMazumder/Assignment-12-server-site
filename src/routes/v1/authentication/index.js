const createAuthCookie = require('../../../api/v1/controllers/createAuthCookie')
const logout = require('../../../api/v1/controllers/logout')

const router = require('express').Router()


router.post('/jwt',createAuthCookie)
router.post('/logout',logout)

module.exports = router