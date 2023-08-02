const express = require('express');
const contactUsController = require('../../controllers/contactUsController');
const router = express.Router();

router.route('/')
    .post(contactUsController.contactUser)
    .get(contactUsController.getAllMessages);

module.exports = router;