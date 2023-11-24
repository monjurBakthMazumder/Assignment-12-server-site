const createBioData = require("../../../../lib/BioData/CreateBioData")


const bioData = async (req, res) => {
    const info = req.body
    const id = req.params.id
    const data = await createBioData(info,id)
    res.send(data)
}

module.exports = bioData