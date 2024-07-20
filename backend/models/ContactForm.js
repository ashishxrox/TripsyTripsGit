const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ContactDataSchema = new mongoose.Schema({
    uniqueStr: {
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
    subject: {
        type: String,
        default: " "
    },
    description: {
        type: String,
        default: " "
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

const ContactData = mongoose.model('HotelData', ContactDataSchema);
module.exports = ContactData