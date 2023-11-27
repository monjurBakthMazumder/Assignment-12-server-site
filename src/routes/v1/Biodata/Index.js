const allBiodataRequest = require('../../../api/v1/BioData/controllers/allBiodataRequest')
const bioData = require('../../../api/v1/BioData/controllers/bioData')
const biodataPremiumRequest = require('../../../api/v1/BioData/controllers/biodataPremiumRequest')
const biodataPremiumRequestApproved = require('../../../api/v1/BioData/controllers/biodataPremiumRequestApproved')
const findAll = require('../../../api/v1/BioData/controllers/findAll')
const findBiodata = require('../../../api/v1/BioData/controllers/findBiodata')
const premiumBioData = require('../../../api/v1/BioData/controllers/premiumBioData')
const similarBiodata = require('../../../api/v1/BioData/controllers/similarBiodata')
const singleBiodata = require('../../../api/v1/BioData/controllers/singleBiodata')
const { verifyToken } = require('../../../middleware/auth')


const router = require('express').Router()

router.get('/all-bioData',  findAll)
router.get('/premium-bioData', premiumBioData)
router.get('/single-bioData/:id', verifyToken, singleBiodata)
router.get('/bioData/:email',verifyToken, findBiodata)
router.get('/similar-bioData/:gender',verifyToken, similarBiodata)
router.get('/bioData-premium-request', verifyToken, allBiodataRequest)
router.put('/bioData', verifyToken, bioData)
router.put('/bioData-premium-request/:id', verifyToken, biodataPremiumRequest)
router.put('/bioData-premium-request-approved/:id',verifyToken, biodataPremiumRequestApproved)

module.exports = router