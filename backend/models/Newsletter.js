const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const NewsletterData = mongoose.model('NewsletterData', NewsletterSchema)
module.exports = NewsletterData