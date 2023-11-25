const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  "name": {
    type: String,
    required: true,
  },
  "email": {
    type: String,
    required: true,
  },
  "role": {
    type: String,
    required: true,
  },
  "premium": {
    type: Boolean,
    required: true,
  },
});

const User = model("user", UserSchema);

module.exports = User;
