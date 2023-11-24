const BioData = require("../../../../models/Biodata");

const bioData = async (req, res) => {
  const bioData = req.body;
  const email = req.body.email;
  const existing = await BioData.findOne({ email: email });
  if (existing) {
    const result = await BioData.findOneAndUpdate({ email: email }, bioData, {
      new: true,
    });
    res.status(201).send(result);
  } else {
    const result = await BioData.create(bioData);
    res.send(result);
  }
};

module.exports = bioData;
