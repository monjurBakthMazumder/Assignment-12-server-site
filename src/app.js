const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./db/connectDB");
const applyMiddleware = require("./middleware");
const cookieParser = require('cookie-parser')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require("./routes/v1/authentication");
const BioDataRouter = require("./routes/v1/Biodata");
const userRouter = require("./routes/v1/user");
const favoritesRouter = require("./routes/v1/favorites");
const PaymentRouter = require("./routes/v1/Payment");
const StatRouter = require("./routes/v1/Stat");
const SuccessStoryRouter = require("./routes/v1/SuccessStory");
applyMiddleware(app);
app.use(cookieParser())

app.use(authRoutes);
app.use(BioDataRouter); // verified Token
app.use(userRouter); // verified Token
app.use(favoritesRouter);  // verified Token
app.use(PaymentRouter);  // verified Token
app.use(StatRouter); // verified Token
app.use(SuccessStoryRouter); // verified Token
app.get("/", (req, res) => {
  res.send("server is running on port");
});

// handling all (get, post, update, delete...) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.statue = 404;
  next(error);
});

// // error handling middleware
app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
//   });
// };

// main();

module.exports = app