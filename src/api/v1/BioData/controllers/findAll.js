const findAllBioData = require("../../../../lib/BioData/FindAllBioData")


const findAll = async (req, res) => {
    const allBioData =await findAllBioData()
    res.send(allBioData)
}

module.exports = findAll