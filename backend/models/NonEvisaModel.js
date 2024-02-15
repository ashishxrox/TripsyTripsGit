const mongoose = require('mongoose');

const NonEvisaDataSchema = new mongoose.Schema({
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
    departDates: {
        type: String,
        required: true
   },
   returnDates: {
        type: String,
        required: true
   },
   visaName:{
    type:String,
    required: true
   },
   createdAt: {
    type: Date,
    default: Date.now
}
})

const NonEvisaFormData = mongoose.model('NonEvisaFormData', NonEvisaDataSchema);
module.exports = NonEvisaFormData