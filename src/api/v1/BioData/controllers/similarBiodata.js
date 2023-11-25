const BioData = require("../../../../models/Biodata");


const similarBiodata = async ( req, res) => {
    try {
        const gender = req.params.gender
    const result = await BioData.find({ gender: gender })
    res.send(result);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = similarBiodata