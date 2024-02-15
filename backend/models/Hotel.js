const mongoose = require('mongoose');

const HotelDataSchema = new mongoose.Schema({
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
    place:{
        type:String,
        required: true
    },
    checkInDate:{
        type:String,
        required: true
    },
    checkOutDate:{
        type:String,
        required: true
    },
   createdAt: {
    type: Date,
    default: Date.now
}
})

const HotelData = mongoose.model('HotelData', HotelDataSchema);
module.exports = HotelData