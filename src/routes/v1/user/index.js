const allUser = require('../../../api/v1/User/controllers/allUser')
const createUser = require('../../../api/v1/User/controllers/createUser')
const makeAdmin = require('../../../api/v1/User/controllers/makeAdmin')
const premiumUser = require('../../../api/v1/User/controllers/premiumUser')
const { verifyToken } = require('../../../middleware/auth')

const router = require('express').Router()

router.get('/users/premium/:email', verifyToken, premiumUser)
router.get('/users', verifyToken, allUser)
router.post('/users', createUser)
router.put('/users/make-admin', verifyToken, makeAdmin)
router.put('/users/make-premium-user', verifyToken, makeAdmin)

module.exports = router