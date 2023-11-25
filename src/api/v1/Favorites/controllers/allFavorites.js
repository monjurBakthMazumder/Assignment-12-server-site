const Favorites = require("../../../../models/Favorites")

const allFavorites = async (req, res) => {
    const email = req.params.email
    const result = await Favorites.find({email: email})
    res.send(result)
}

module.exports = allFavorites