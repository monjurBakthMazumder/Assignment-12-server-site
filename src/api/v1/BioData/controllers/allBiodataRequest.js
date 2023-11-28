
const BioData = require("../../../../models/BioData")



const allBiodataRequest = async (req, res) => {
    const result = await BioData.find({premiumRequest: true})
    res.send(result)
}

module.exports = allBiodataRequest