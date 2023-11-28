const approvedContactRequest = require("../../../api/v1/Payment/controllers/approvedContactRequest");
const contactRequest = require("../../../api/v1/Payment/controllers/contactRequest");
const createPayment = require("../../../api/v1/Payment/controllers/createPayment");
const createPaymentIntent = require("../../../api/v1/Payment/controllers/createPaymentIntent");
const deleteContactRequest = require("../../../api/v1/Payment/controllers/deleteContactRequest");
const userContactRequest = require("../../../api/v1/Payment/controllers/userContactRequest");
const { verifyToken, verifyAdmin } = require("../../../middleware/auth");

const router = require("express").Router();

router.get("/contact-request", verifyToken, verifyAdmin, contactRequest);
router.get("/user-contact-request/:email", verifyToken, userContactRequest);
router.post("/payments", verifyToken, createPayment);
router.put("/approved-contact-request/:id", verifyToken, verifyAdmin, approvedContactRequest);
router.delete("/delete-contact-request/:id", verifyToken, deleteContactRequest);
// payment intent
router.post("/create-payment-intent", createPaymentIntent);

module.exports = router;
