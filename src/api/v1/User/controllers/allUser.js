const User = require("../../../../models/User");

const allUser = async (req, res) => {
  const name = req.query.name;
  let filter = {};
  if (name) {
    filter = {
      name: { $regex: new RegExp(name, "i") },
    };
  }
  const result = await User.find(filter);
  res.send(result);
};

module.exports = allUser;
