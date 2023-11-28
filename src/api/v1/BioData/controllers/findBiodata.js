const BioData = require("../../../../models/BioData");


const findBiodata = async ( req, res) => {
    const email = req.params.email
    const result = await BioData.findOne({ email: email })
    res.send(result);
}

module.exports = findBiodata