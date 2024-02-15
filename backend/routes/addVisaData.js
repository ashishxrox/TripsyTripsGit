const express = require('express');
const router = express.Router();
const Visa = require('../models/Visa')






// Create a Country Visa using: POST '/api/addVisaData' Doesnt Require auth
router.post('/', (req,res)=>{
    console.log(req.body)
    const countryVisa = Visa(req.body)
    countryVisa.save()
    res.send(req.body)
})



module.exports = router;

// module.exports = router