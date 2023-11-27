const createSuccessStory = require('../../../api/v1/SuccessStory/createSuccessStory')
const { verifyToken } = require('../../../middleware/auth')

const router = require('express').Router()

router.post('/success-story', verifyToken, createSuccessStory)

module.exports = router