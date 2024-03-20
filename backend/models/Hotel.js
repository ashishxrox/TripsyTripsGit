const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const HotelDataSchema = new mongoose.Schema({
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
    place: {
        type: String,
        required: true
    },
    checkInDate: {
        type: String,
        required: true
    },
    checkOutDate: {
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

const HotelData = mongoose.model('HotelData', HotelDataSchema);
module.exports = HotelData