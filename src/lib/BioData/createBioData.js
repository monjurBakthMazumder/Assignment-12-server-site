const BioData = require("../../models/Biodata")


const createBioData = async (bioData) => {
    const result = await BioData.create(bioData)
    return result
}

module.exports = createBioData