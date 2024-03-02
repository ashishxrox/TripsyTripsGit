const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
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
     travellerCount: {
          type: Number,
          required: true
     },
     totalCost: {
          type: String,
          required: true
     },
     eVisa: {
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
     paymentStatus: {
          type: String,
          default: "Pending"
     },
     uniqueStr: {
          type: String,
          required: true
     },
     visaName: {
          type: String,
          required: true
     },
     documentUniqueStrs: {
          type: Array,
          required: true
     },
     portOfEntry:{
          type: String
     },
     createdAt: {
          type: Date,
          default: Date.now
      },
     visaApplied: {
          type: Boolean,
          default: false
     },
     visaGranted: {
          type: String
     }
});

const FormData = mongoose.model('FormData', FormDataSchema);

module.exports = FormData;
