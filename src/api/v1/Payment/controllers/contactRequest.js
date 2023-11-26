const Payment = require("../../../../models/Payment");

const contactRequest = async (req, res) => {
  try {
    const result = await Payment.find({ status: "Pending" });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = contactRequest;
