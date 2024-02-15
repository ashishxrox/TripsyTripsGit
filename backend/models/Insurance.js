const mongoose = require('mongoose');

const InsuranceDataSchema = new mongoose.Schema({
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
    departDate:{
        type:String,
        required: true
    },
    returnDate:{
        type:String,
        required: true
    },
   createdAt: {
    type: Date,
    default: Date.now
}
})

const InsuranceData = mongoose.model('InsuranceData', InsuranceDataSchema);
module.exports = InsuranceData