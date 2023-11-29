const BioData = require("../../../../models/BioData");

const allBiodataCount = async (req, res) => {
  try {
    console.log("before");
    const result = await BioData.countDocuments();
    res.send({ result });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = allBiodataCount;
