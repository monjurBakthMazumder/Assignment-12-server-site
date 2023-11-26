const Payment = require("../../../../models/Payment");

const userContactRequest = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Payment.find({ selfEmail: email });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = userContactRequest;
