const BioData = require("../../../../models/Biodata")



const allBiodataRequest = async (req, res) => {
    const result = await BioData.find({premiumRequest: true})
    res.send(result)
}

module.exports = allBiodataRequest