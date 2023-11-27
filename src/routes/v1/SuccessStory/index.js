const createSuccessStory = require('../../../api/v1/SuccessStory/createSuccessStory')

const router = require('express').Router()

router.post('/success-story', createSuccessStory)

module.exports = router