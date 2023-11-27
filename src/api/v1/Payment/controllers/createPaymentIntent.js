const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const createPaymentIntent = async (req, res) => {
  try {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    console.log(amount, "amount inside the intent");

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "bdt",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createPaymentIntent;
