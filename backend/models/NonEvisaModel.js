const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const NonEvisaDataSchema = new mongoose.Schema({
    uniqueStr:{
        type: String,
        default: uuidv4,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    departDates: {
        type: String,
        required: true
    },
    returnDates: {
        type: String,
        required: true
    },
    visaName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String,
        default: " "
    },
    handle: {
        type: String,
        default: " "
    }
})

const NonEvisaFormData = mongoose.model('NonEvisaFormData', NonEvisaDataSchema);
module.exports = NonEvisaFormData