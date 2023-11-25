const bioData = require('../../../api/v1/BioData/controllers/bioData')
const findAll = require('../../../api/v1/BioData/controllers/findAll')
const findBiodata = require('../../../api/v1/BioData/controllers/findBiodata')
const similarBiodata = require('../../../api/v1/BioData/controllers/similarBiodata')
const singleBiodata = require('../../../api/v1/BioData/controllers/singleBiodata')


const router = require('express').Router()

router.get('/all-bioData', findAll)
router.get('/single-bioData/:id', singleBiodata)
router.get('/bioData/:email', findBiodata)
router.get('/similar-bioData/:gender', similarBiodata)
router.put('/bioData', bioData)

module.exports = router