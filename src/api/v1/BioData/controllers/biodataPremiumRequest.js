const BioData = require("../../../../models/BioData");

const biodataPremiumRequest = async (req, res) => {
    const id = req.params.id;
    data = {premiumRequest : true}
    const result = await BioData.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      res.send(result);
}

module.exports = biodataPremiumRequest