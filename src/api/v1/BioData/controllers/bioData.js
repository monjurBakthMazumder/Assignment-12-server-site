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
    const totalLength = await BioData.countDocuments();
    const countId = totalLength + 1;
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    console.log(`${year}-${month}-${day}`);
    const date = `${year}-${month}-${day}`

    const newData = {
      ...bioData,
      date: date,
      bioData_id: countId,
    };

    const result = await BioData.create(newData);
    res.send(result);
  }
};

module.exports = bioData;
