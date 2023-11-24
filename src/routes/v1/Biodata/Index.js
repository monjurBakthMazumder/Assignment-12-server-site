const findAll = require('../../../api/v1/BioData/controllers/findAll')


const router = require('express').Router()

router.get('/bioData', findAll)

module.exports = router