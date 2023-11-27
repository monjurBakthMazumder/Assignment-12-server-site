const allSuccessStory = require('../../../api/v1/SuccessStory/allSuccessStory')
const createSuccessStory = require('../../../api/v1/SuccessStory/createSuccessStory')
const { verifyToken } = require('../../../middleware/auth')

const router = require('express').Router()

router.get('/success-story', allSuccessStory)
router.post('/success-story', verifyToken, createSuccessStory)

module.exports = router