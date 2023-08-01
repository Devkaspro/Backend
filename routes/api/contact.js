const express = require('express');
const contactUsuser = require('../../controllers/contactUsController');
const router = express.Router();

router.route('/',)
    .post(contactUsuser);


module.exports = router;