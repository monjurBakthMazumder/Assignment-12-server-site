


const SuccessStory = require("../../../models/SuccessStory");

const singleSuccessStory = async (req, res) => {
    try {
        const email = req.params.email;
        let existingSuccess = false;
        const info = await SuccessStory.findOne({selfEmail : email})
        if(info){
            existingSuccess = true;
        }
        console.log(existingSuccess);
        res.send({info, existingSuccess})
    } catch (error) {
        console.log(error.message);
    }

  
};

module.exports = singleSuccessStory;
