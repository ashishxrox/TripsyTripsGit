const express = require('express');
const FormData = require('../models/FormData')

const router = express.Router();


router.delete('/', async(req, res)=>{
    try {
        await FormData.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

module.exports = router;
