const User = require("../../../../models/user");


const premiumUser = async(req,res) => {
    const email = req.params.email
    console.log(email, 'sdasd');
    let userPremium = false
    const user = await User.findOne({ email: email })
    if(user?.premium){
        userPremium = true
    }
    console.log(userPremium);
    res.send(userPremium)
}

module.exports = premiumUser