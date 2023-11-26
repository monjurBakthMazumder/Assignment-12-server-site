const Payment = require("../../../../models/Payment");

const createPayment = async (req, res) => {
  try {
    const payment = req.body;
  console.log('before create');
  const result = await Payment.create(payment);
  console.log('after create');
  res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createPayment;
