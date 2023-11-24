const bioData = require('../../../api/v1/BioData/controllers/bioData')
const findAll = require('../../../api/v1/BioData/controllers/findAll')
const findBiodata = require('../../../api/v1/BioData/controllers/findBiodata')


const router = require('express').Router()

router.get('/all-bioData', findAll)
router.get('/bioData/:email', findBiodata)
router.put('/bioData', bioData)

module.exports = router