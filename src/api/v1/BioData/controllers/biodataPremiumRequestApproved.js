
const BioData = require("../../../../models/BioData");

const biodataPremiumRequestApproved = async (req, res) => {
    const id = req.params.id;
    data = {premiumRequest : false, premium:true}
    const result = await BioData.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      res.send(result);
}

module.exports = biodataPremiumRequestApproved