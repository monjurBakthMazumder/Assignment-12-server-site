const allBiodataRequest = require('../../../api/v1/BioData/controllers/allBiodataRequest')
const bioData = require('../../../api/v1/BioData/controllers/bioData')
const biodataPremiumRequest = require('../../../api/v1/BioData/controllers/biodataPremiumRequest')
const biodataPremiumRequestApproved = require('../../../api/v1/BioData/controllers/biodataPremiumRequestApproved')
const findAll = require('../../../api/v1/BioData/controllers/findAll')
const findBiodata = require('../../../api/v1/BioData/controllers/findBiodata')
const similarBiodata = require('../../../api/v1/BioData/controllers/similarBiodata')
const singleBiodata = require('../../../api/v1/BioData/controllers/singleBiodata')


const router = require('express').Router()

router.get('/all-bioData', findAll)
router.get('/single-bioData/:id', singleBiodata)
router.get('/bioData/:email', findBiodata)
router.get('/similar-bioData/:gender', similarBiodata)
router.get('/bioData-premium-request', allBiodataRequest)
router.put('/bioData', bioData)
router.put('/bioData-premium-request/:id', biodataPremiumRequest)
router.put('/bioData-premium-request-approved/:id', biodataPremiumRequestApproved)

module.exports = router