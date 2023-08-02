const ContactUs = require('../model/contactUs');

// Submit user's feedback form data to database for admin review and response.
const contactUser = async (req, res) => {
    try
    {
        const { name, email, subject, message } = req.body;
        const contact = await ContactUs({ name, email, subject, message });
        await contact.save();
        res.status(201).json({
            name,
            success: true,
            message: 'successfully submitted your request!',
        });
    } catch (err)
    {
        res.status(500).json({
            success: false,
            error: 'something went wrong while submitting the request',
        });
    }
};

// Get all messages from users who have sent a query or feedback about our services.
const getAllMessages = async (req, res) => {
    const contacts = await ContactUs.find();
    if (!contacts) return res.status(204).json({ 'message': 'No Message found' });
    res.json(contacts);
};

module.exports = {
    contactUser,
    getAllMessages
};