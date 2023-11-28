const User = require("../../../../models/User");


const premiumUser = async(req,res) => {
    const email = req.params.email
    let userPremium = false
    const user = await User.findOne({ email: email })
    if(user?.premium){
        userPremium = true
    }
    res.send(userPremium)
}

module.exports = premiumUser