const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const FlightDataSchema = new mongoose.Schema({
    uniqueStr:{
        type: String,
        default: uuidv4,
        unqiue: true
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
    type: {
        type: String,
        required: true
    },
    trip: {
        type: String,
        required: true
    },
    departDate: {
        type: String,
        required: true
    },
    arrivalDate: {
        type: String,
    },
    destination: {
        type: String,
        required: true
    },
    location: {
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

const FlightData = mongoose.model('FlightData', FlightDataSchema);
module.exports = FlightData