const BioData = require("../../../../models/BioData");


const similarBiodata = async ( req, res) => {
    try {
        const gender = req.params.gender
    const result = await BioData.find({ gender: gender }).limit(10)
    res.send(result);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = similarBiodata