const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viewSchema = new Schema({
    views: {
        type: Number,
        default: 0,
        index: true    
    }
},{timestamps:true})

module.exports.ViewModel = mongoose.model('view', viewSchema)