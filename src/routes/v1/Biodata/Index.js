const allBiodataCount = require('../../../api/v1/BioData/controllers/allBiodataCount')
const allBiodataRequest = require('../../../api/v1/BioData/controllers/allBiodataRequest')
const bioData = require('../../../api/v1/BioData/controllers/bioData')
const biodataPremiumRequest = require('../../../api/v1/BioData/controllers/biodataPremiumRequest')
const biodataPremiumRequestApproved = require('../../../api/v1/BioData/controllers/biodataPremiumRequestApproved')
const findAll = require('../../../api/v1/BioData/controllers/findAll')
const findBiodata = require('../../../api/v1/BioData/controllers/findBiodata')
const isFindBiodata = require('../../../api/v1/BioData/controllers/isFindBiodata')
const premiumBioData = require('../../../api/v1/BioData/controllers/premiumBioData')
const similarBiodata = require('../../../api/v1/BioData/controllers/similarBiodata')
const singleBiodata = require('../../../api/v1/BioData/controllers/singleBiodata')
const { verifyToken, verifyAdmin } = require('../../../middleware/auth')


const router = require('express').Router()

router.get('/all-bioData',  findAll)
router.get('/all-bioData-count',  allBiodataCount)
router.get('/premium-bioData', premiumBioData)
router.get('/single-bioData/:id', verifyToken, singleBiodata)
router.get('/bioData/:email',verifyToken, findBiodata)
router.get('/isBioData/:email',verifyToken, isFindBiodata)
router.get('/similar-bioData/:gender',verifyToken, similarBiodata)
router.get('/bioData-premium-request', verifyToken, verifyAdmin, allBiodataRequest)
router.put('/bioData', verifyToken, bioData)
router.put('/bioData-premium-request/:id', verifyToken, biodataPremiumRequest)
router.put('/bioData-premium-request-approved/:id',verifyToken, verifyAdmin, biodataPremiumRequestApproved)

module.exports = router