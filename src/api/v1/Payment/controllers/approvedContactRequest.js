const Payment = require("../../../../models/Payment");

const approvedContactRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const data = { status: "Approved" };
    const result = await Payment.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = approvedContactRequest;
