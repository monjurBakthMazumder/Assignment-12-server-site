const BioData = require("../../../../models/BioData");


const isFindBiodata = async ( req, res) => {
    const email = req.params.email
    let isFindBio = false;
    const result = await BioData.findOne({ email: email })
    if(result){
        isFindBio=true
    }
    console.log(result);
    console.log("isFindBio",isFindBio);
    res.send(isFindBio);
}

module.exports = isFindBiodata