const User = require("../../../../models/user");

const makePremiumUser = async (req, res) => {
  const user = req.body;
  const email = req.body.email
  console.log(email);
  const result = await User.findOneAndUpdate({ email: email }, user, {
    new: true,
  });
  res.send(result);
};

module.exports = makePremiumUser;
