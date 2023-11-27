const allFavorites = require('../../../api/v1/Favorites/controllers/allFavorites')
const createFavorites = require('../../../api/v1/Favorites/controllers/createFavorites')
const deleteBiodata = require('../../../api/v1/Favorites/controllers/deleteBiodata')
const { verifyToken } = require('../../../middleware/auth')

const router = require('express').Router()

router.get('/user-favorites/:email',  verifyToken, allFavorites)
router.delete('/delete-favorites/:id', verifyToken, deleteBiodata)
router.post('/favorites', verifyToken, createFavorites)

module.exports = router