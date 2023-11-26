

const Payment = require("../../../../models/Payment");

const deleteContactRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Payment.deleteOne({_id: id})
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteContactRequest;
