const mongoose = require('mongoose');

const PackageDataSchema = new mongoose.Schema({
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

const PackageData = mongoose.model('PackageData', PackageDataSchema);
module.exports = PackageData