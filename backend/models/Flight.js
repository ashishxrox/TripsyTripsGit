const mongoose = require('mongoose');

const FlightDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    contact:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required: true
    },
    trip:{
        type:String,
        required: true
    },
    departDate:{
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
}
})

const FlightData = mongoose.model('FlightData', FlightDataSchema);
module.exports = FlightData