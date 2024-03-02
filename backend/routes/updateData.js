const express = require('express')
const FormData = require('../models/FormData')

const router = express.Router();

router.get('/:uniqueStr', async(req, res) => { // Corrected order: req first, then res

    const { uniqueStr } = req.params;

    try {
        const query = await FormData.findOneAndUpdate(
            { uniqueStr: uniqueStr },
            {$set: {visaApplied: true}},
            {new : true}
        )

        res.send("Visa Applied")
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
