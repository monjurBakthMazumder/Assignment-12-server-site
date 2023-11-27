


const SuccessStory = require("../../../models/SuccessStory");

const singleSuccessStory = async (req, res) => {
    try {
        const email = req.params.email;
        let existingSuccess = false;
        const result = await SuccessStory.findOne({selfEmail : email})
        if(result){
            existingSuccess = true;
        }
        console.log(existingSuccess);
        res.send({result, existingSuccess})
    } catch (error) {
        console.log(error.message);
    }

  
};

module.exports = singleSuccessStory;
