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
    type: String,
    required: true,
  },
  "partnerName": {
    type: String,
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
  "marriageDate": {
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


