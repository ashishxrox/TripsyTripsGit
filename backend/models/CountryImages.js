const mongoose = require('mongoose');

// Define the schema for DocumentData
const documentDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    documentPath: {
        type: String,
        required: true
    },
    uniqueStr: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const DocumentData = mongoose.model('DocumentData', documentDataSchema);

module.exports = DocumentData;
