const { model, Schema } = require("mongoose");

const SuccessStorySchema = new Schema({
  "selfBioId": {
    type: Number,
    required: true,
  },
  "partnerBioId": {
    type: Number,
    required: true,
  },
  "selfName": {
    type: Number,
    required: true,
  },
  "partnerName": {
    type: Number,
    required: true,
  },
  "coupleImg": {
    type: String,
    required: true,
  },
  "successStory": {
    type: String,
    required: true,
  },
  "selfEmail": {
    type: String,
    required: true,
  },
  "date": {
    type: String,
    required: true,
  },
  "time": {
    type: String,
    required: true,
  },
});

const SuccessStory = model("successStory", SuccessStorySchema);

module.exports = SuccessStory;


