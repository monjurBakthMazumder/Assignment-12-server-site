const BioData = require("../../../../models/BioData");
const Payment = require("../../../../models/Payment");

const singleBiodata = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.query.email;
    console.log("email", email);
    let requested = ""; 
    const exiting = await Payment.findOne({bioData_Id : id, selfEmail : email})
    if(exiting) {
        requested = exiting?.status
    }
    const result = await BioData.findOne({ _id: id });
    res.send({result, requested});
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = singleBiodata;
