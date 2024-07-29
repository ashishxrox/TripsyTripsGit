const express = require('express');
const FormData = require('../models/FormData')
const Insurance = require('../models/Insurance')
const Flight = require('../models/Flight')
const NonEvisaFormData = require('../models/NonEvisaModel')
const Package = require('../models/Package')
const ContactData = require('../models/ContactForm')
const NewsletterData = require('../models/Newsletter');

const router = express.Router();


router.delete('/', async(req, res)=>{
    try {
        await FormData.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})


router.delete('/flight', async(req, res)=>{
    try {
        await Flight.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

router.delete('/contact', async(req, res)=>{
    try {
        await ContactData.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

router.delete('/insurance', async(req, res)=>{
    try {
        await Insurance.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

router.delete('/nonevisa', async(req, res)=>{
    try {
        await NonEvisaFormData.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

router.delete('/package', async(req, res)=>{
    try {
        await Package.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

router.delete('/newsletter', async(req, res)=>{
    try {
        await NewsletterData.deleteMany({})

        res.status(200).json({message: "All entries deleted"})
    } catch (error) {
        res.status(500).json({error: "COuld not Delete!", details:error.message})
    }
})

module.exports = router;
