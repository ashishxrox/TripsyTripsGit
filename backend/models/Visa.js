const mongoose = require('mongoose')

const VisaTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    entry:{
        type: String,
        required: true
    },
    validityDays:{
        type:Number,
        required: true
    },
    durationDays:{
        type:Number,
        required: true
    },
    processingTime:{
        type:Number,
        required: true
    },
    docsReq: {
        type:Object,
        required: true
    },
    totalCost: {
        type:Number,
        required: true
    }
})

const VisaSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    eVisa: {
        type:String,
        required:true
    },
    visaType: [VisaTypeSchema]
})

module.exports = mongoose.model('visa', VisaSchema);