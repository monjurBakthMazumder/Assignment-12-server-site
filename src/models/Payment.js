const { model, Schema } = require("mongoose");

const PaymentSchema = new Schema({
  "bioData_Id": {
    type: String,
    required: true,
  },
  "bioId": {
    type: Number,
    required: true,
  },
  "bioName": {
    type: String,
    required: true,
  },
  "bioEmail": {
    type: String,
    required: true,
  },
  "bioMobile": {
    type: String,
    required: true,
  },
  "selfBioId": {
    type: Number,
    required: true,
  },
  "selfEmail": {
    type: String,
    required: true,
  },
  "status": {
    type: String,
    required: true,
  },
  "price": {
    type: Number,
    required: true,
  },
});

const Payment = model("payment", PaymentSchema);

module.exports = Payment;

