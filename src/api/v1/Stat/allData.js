const BioData = require("../../../models/BioData");
const Payment = require("../../../models/Payment");
const User = require("../../../models/User");

const allData = async (req, res) => {
  try {
    const totalBiodata = await BioData.countDocuments();
    const totalMaleBiodata = await BioData.countDocuments({ gender: "Male" });
    const totalFemaleBiodata = await BioData.countDocuments({
      gender: "Female",
    });
    const totalPremiumBiodata = await BioData.countDocuments({ premium: true });
    const revenue = await Payment.countDocuments();
    const totalUser = await User.countDocuments();
    const totalRevenue = revenue * 500;
    res.send({
      totalBiodata,
      totalMaleBiodata,
      totalFemaleBiodata,
      totalPremiumBiodata,
      totalUser,
      totalRevenue,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = allData;
