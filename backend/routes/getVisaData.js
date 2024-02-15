const { json } = require('express');
const express = require('express');
const Visa = require('../models/Visa');


const router = express.Router();


//Route 1: Get all Visa Data using: GET "/api/getVisaData"
router.get('/', async (req, res) => {
    try {
        const data = await Visa.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router