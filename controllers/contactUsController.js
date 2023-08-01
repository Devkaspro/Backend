const ContactUs = require('../model/contactUs');


const contactUsuser = async (req, res) => {
    const newContactusUser = await ContactUs(
        req.body.name,
        req.body.emailId,
        req.body.message);
    return res
        .status(201)
        .json({ message: 'Thank you for your feedback!', data: newContactusUser });

};

module.exports = contactUsuser;