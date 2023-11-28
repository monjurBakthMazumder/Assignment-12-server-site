const BioData = require("../../../../models/BioData");

const premiumBioData = async (req, res) => {
    const result = await BioData.find({premium : true}).limit(6)
    res.send(result)
};

module.exports = premiumBioData;