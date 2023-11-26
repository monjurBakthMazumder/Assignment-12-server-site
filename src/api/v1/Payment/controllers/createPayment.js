const Payment = require("../../../../models/Payment");

const createPayment = async (req, res) => {
  try {
    const payment = req.body;
  const result = await Payment.create(payment);
  res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createPayment;
