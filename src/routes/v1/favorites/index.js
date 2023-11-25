const allFavorites = require('../../../api/v1/Favorites/controllers/allFavorites')
const createFavorites = require('../../../api/v1/Favorites/controllers/createFavorites')
const deleteBiodata = require('../../../api/v1/Favorites/controllers/deleteBiodata')

const router = require('express').Router()

router.get('/user-favorites/:email', allFavorites)
router.delete('/delete-favorites/:id', deleteBiodata)
router.post('/favorites', createFavorites)

module.exports = router