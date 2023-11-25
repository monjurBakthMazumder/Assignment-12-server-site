const { model, Schema } = require("mongoose")

const BioDataSchema = new Schema({
    "bioData_id": {
        type: Number,
        required: true,
    },
    "date": {
        type: String,
        required: true,
    },
    "name": {
        type: String,
        required: true,
    },
    "gender": {
        type: String,
        required: true,
    },
    "fatherName": {
        type: String,
        required: true,
    },
    "motherName": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
    },
    "mobile": {
        type: String,
        required: true,
    },
    "image": {
        type: String,
        required: true,
    },
    "age": {
        type: Number,
        required: true,
    },
    "dateOfBirth": {
        type: String,
        required: true,
    },
    "hight": {
        type: String,
        required: true,
    },
    "weight": {
        type: String,
        required: true,
    },
    "occupation": {
        type: String,
        required: true,
    },
    "race": {
        type: String,
        required: true,
    },
    "permanentDivision": {
        type: String,
        required: true,
    },
    "presentDivision": {
        type: String,
        required: true,
    },
    "expectedHight": {
        type: String,
        required: true,
    },
    "expectedWeight": {
        type: String,
        required: true,
    },
    "expectedAge": {
        type: Number,
        required: true,
    },
    "premium": {
        type: Boolean,
        required: true,
    },
    "premiumRequest": {
        type: Boolean,
        required: true,
    },
})

const BioData = model("biodatas", BioDataSchema)

module.exports = BioData