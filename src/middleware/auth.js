const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log("token", token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const filter = { email: email };
  const user = await User.findOne(filter);
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = {
  verifyToken,
  verifyAdmin,
};
