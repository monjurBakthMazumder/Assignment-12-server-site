const createBioData = require("../../../../lib/BioData/CreateBioData")


const bioData = async (req, res) => {
    const info = req.body
    const data = await createBioData(info)
    res.send(data)
}

module.exports = bioData