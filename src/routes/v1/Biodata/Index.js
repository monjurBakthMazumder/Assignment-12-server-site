const bioData = require('../../../api/v1/BioData/controllers/bioData')
const findAll = require('../../../api/v1/BioData/controllers/findAll')


const router = require('express').Router()

router.get('/bioData', findAll)
router.post('/bioData', bioData)

module.exports = router