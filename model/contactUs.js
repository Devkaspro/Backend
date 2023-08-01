const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactUs = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ContactUs', contactUsSchema);
