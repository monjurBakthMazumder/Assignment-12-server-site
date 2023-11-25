const { model, Schema } = require("mongoose");

const FavoritesSchema = new Schema({
  "name": {
    type: String,
    required: true,
  },
  "email": {
    type: String,
    required: true,
  },
  "bioData_id": {
    type: String,
    required: true,
  },
  "permanentDivision": {
    type: String,
    required: true,
  },
  "occupation": {
    type: String,
    required: true,
  },
  "dataId": {
    type: String,
    required: true,
  },
});

const Favorites = model("favorites", FavoritesSchema);

module.exports = Favorites;
