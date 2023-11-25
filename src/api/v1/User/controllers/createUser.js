const User = require("../../../../models/user");


const createUser = async ( req, res) => {
    const user = req.body
    const email = req.body.email;
    const existing = await User.findOne({ email: email });

    if(existing){
        return res.send({message : "User already exists"})
    }
    else{
        const result = await User.create(user)
        res.send(result)
    }

}

module.exports = createUser