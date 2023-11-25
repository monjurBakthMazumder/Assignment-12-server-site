
const Favorites = require("../../../../models/Favorites")

const deleteBiodata = async (req, res) => {
    const id = req.params.id
    const result = await Favorites.deleteOne({_id: id})
    res.send(result)
}

module.exports = deleteBiodata