const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    downloadLink: {
        type: String,
        required: true,
        expires: '1h'
    },
    timeStamp: {
        type: Date
    },
    expirationDate: {
        type: Date
    }
});

module.exports = mongoose.model('Content', contentSchema);