const createToken = require("../../../lib/authentication/createToken");

const createAuthCookie = (req, res, next) => {
  try {
    console.log('object');
    const user = req.body;
    console.log("user" , user);
    const token = createToken(user);
    console.log("token",token);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (err) {
    next(err);
  }
};

module.exports = createAuthCookie;
