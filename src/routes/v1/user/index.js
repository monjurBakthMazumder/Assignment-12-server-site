const allUser = require('../../../api/v1/User/controllers/allUser')
const createUser = require('../../../api/v1/User/controllers/createUser')
const makeAdmin = require('../../../api/v1/User/controllers/makeAdmin')
const premiumUser = require('../../../api/v1/User/controllers/premiumUser')

const router = require('express').Router()

router.get('/users/premium/:email', premiumUser)
router.get('/users', allUser)
router.post('/users', createUser)
router.put('/users/make-admin', makeAdmin)
router.put('/users/make-premium-user', makeAdmin)

module.exports = router