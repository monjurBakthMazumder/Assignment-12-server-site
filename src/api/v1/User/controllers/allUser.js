

const User = require("../../../../models/user");


const allUser = async(req,res) => {
    const result = await User.find()
    res.send(result)
}

module.exports = allUser