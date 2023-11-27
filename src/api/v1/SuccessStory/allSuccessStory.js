

const SuccessStory = require("../../../models/SuccessStory");

const allSuccessStory = async (req, res) => {
    try {
        const result = await SuccessStory.find()
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }

  
};

module.exports = allSuccessStory;
