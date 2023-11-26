const approvedContactRequest = require('../../../api/v1/Payment/controllers/approvedContactRequest')
const contactRequest = require('../../../api/v1/Payment/controllers/contactRequest')
const createPayment = require('../../../api/v1/Payment/controllers/createPayment')
const deleteContactRequest = require('../../../api/v1/Payment/controllers/deleteContactRequest')
const userContactRequest = require('../../../api/v1/Payment/controllers/userContactRequest')

const router = require('express').Router()

router.get('/contact-request', contactRequest)
router.get('/user-contact-request/:email', userContactRequest)
router.post('/payments', createPayment)
router.put('/approved-contact-request/:id', approvedContactRequest)
router.delete('/delete-contact-request/:id', deleteContactRequest)

module.exports = router