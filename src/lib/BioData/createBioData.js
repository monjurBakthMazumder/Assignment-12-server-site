const BioData = require("../../models/Biodata");

const createBioData = async (bioData, id) => {
  const existing = await BioData.findById(id);
  if (existing) {
    const result = await BioData.findByIdAndUpdate(id, bioData, { new: true });
    return result
  }
  else{
    const result = await BioData.create({ _id: id, ...bioData })
    return result
  }

};

module.exports = createBioData;
