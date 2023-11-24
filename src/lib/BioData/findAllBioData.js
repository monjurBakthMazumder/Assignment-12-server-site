const BioData = require("../../models/Biodata")


const findAllBioData = async () => {
    const result = await BioData.find()

    return result
}

module.exports = findAllBioData