const BioData = require("../../../../models/BioData");

const allBiodataCount = async (req, res) => {
  try {
    const filter = {};
    const ageTo =
      req.query?.ageTo !== "undefined" ? req.query?.ageTo : undefined;
    const ageFrom =
      req.query?.ageFrom !== "undefined" ? req.query?.ageFrom : undefined;
    const gender =
      req.query?.gender !== "undefined" ? req.query?.gender : undefined;
    const permanentDivision =
      req.query?.permanentDivision !== "undefined"
        ? req.query?.permanentDivision
        : undefined;
    const presentDivision =
      req.query?.presentDivision !== "undefined"
        ? req.query?.presentDivision
        : undefined;
    if (ageTo && ageFrom) {
      filter.age = { $gte: ageFrom, $lte: ageTo };
    } else if (ageTo) {
      filter.age = { $lte: ageTo };
    } else if (ageFrom) {
      filter.age = { $gte: ageFrom };
    }

    if (gender) {
      filter.gender = gender;
    }

    if (permanentDivision) {
      filter.permanentDivision = permanentDivision;
    }
    if (presentDivision) {
      filter.presentDivision = presentDivision;
    }
    console.log("before");
    const result = await BioData.countDocuments(filter);
    res.send({ result });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = allBiodataCount;
