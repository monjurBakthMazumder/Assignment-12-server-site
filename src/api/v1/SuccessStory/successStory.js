

const SuccessStory = require("../../../models/SuccessStory");

const successStory = async (req, res) => {
    try {
        const result = await SuccessStory.find().sort({ marriageDate: 1 })
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }

  
};

module.exports = successStory;
