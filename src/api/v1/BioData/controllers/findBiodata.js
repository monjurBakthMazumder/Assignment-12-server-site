const BioData = require("../../../../models/BioData");


const findBiodata = async ( req, res) => {
    const email = req.params.email
    const result = await BioData.findOne({ email: email })
    console.log(result);
    res.send(result);
}

module.exports = findBiodata