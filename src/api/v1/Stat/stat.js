const BioData = require("../../../models/Biodata");
const SuccessStory = require("../../../models/SuccessStory");

const stat = async (req, res) => {
  try {
    const marriage = await SuccessStory.countDocuments();
    const totalMaleBiodata = await BioData.countDocuments({ gender: "Male" });
    const totalFemaleBiodata = await BioData.countDocuments({
      gender: "Female",
    });
    res.send({
        marriage,
      totalMaleBiodata,
      totalFemaleBiodata,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = stat;
