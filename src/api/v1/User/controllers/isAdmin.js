const User = require("../../../../models/User");

const isAdmin = async (req, res) => {
  const email = req.params.email;

  if (email !== req.decoded.email) {
    return res.status(403).send({ message: "forbidden access" });
  }

  const query = { email: email };
  const user = await User.findOne(query);
  let admin = false;
  if (user) {
    admin = user?.role === "admin";
  }
  res.send({ admin });
};

module.exports = isAdmin;
