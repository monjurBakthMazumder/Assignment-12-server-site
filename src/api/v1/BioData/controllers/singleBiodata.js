const BioData = require("../../../../models/Biodata")


const singleBiodata = async(req, res) => {
    try {
        const id = req.params.id
        const result = await BioData.findOne({_id : id})
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
   
}

module.exports = singleBiodata