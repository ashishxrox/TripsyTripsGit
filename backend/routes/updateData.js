const express = require('express')
const FormData = require('../models/FormData')
const HotelData = require('../models/Hotel')
const FlightData = require('../models/Flight')
const InsuranceData = require('../models/Insurance')
const NonEvisaFormData = require('../models/NonEvisaModel')
const PackageData = require('../models/Package')

const router = express.Router();

router.get('/:uniqueStr', async(req, res) => { 

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

router.get('/setGranted/:uniqueStr', async(req, res)=>{
    const {uniqueStr} = req.params;
    try {
        const query = await FormData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {visaGranted: true}},
            {new: true}
        )

        res.send("Visa Email Sent");
    } catch (error) {
        res.send(error)
    }
})


router.get('/comment/:uniqueStr/:comment', async(req,res)=>{
    const {uniqueStr, comment} = req.params
    try {
        const query = await FormData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {comment: comment}},
            {new: true}
        )

        res.send("Comment Added");
    } catch (error) {
        res.send(error)
    }
})

router.get('/handledBy/:uniqueStr/:handle', async(req,res)=>{
    const {uniqueStr, handle} = req.params
    console.log(handle)
    try {
        const query = await FormData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {handle: handle}},
            {new: true}
        )

        res.send("handled By Added");
    } catch (error) {
        res.send(error)
    }
})

// *****HOTEL******

router.get('/hotelcomment/:uniqueStr/:comment', async(req,res)=>{
    const {uniqueStr, comment} = req.params
    try {
        const query = await HotelData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {comment: comment}},
            {new: true}
        )

        res.send("Comment Added");
    } catch (error) {
        res.send(error)
    }
})

router.get('/hotelhandledBy/:uniqueStr/:handle', async(req,res)=>{
    const {uniqueStr, handle} = req.params
    console.log(handle)
    try {
        const query = await HotelData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {handle: handle}},
            {new: true}
        )

        res.send("handled By Added");
    } catch (error) {
        res.send(error)
    }
})

// *****FLIGHT******

router.get('/flightcomment/:uniqueStr/:comment', async(req,res)=>{
    const {uniqueStr, comment} = req.params
    try {
        const query = await FlightData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {comment: comment}},
            {new: true}
        )

        res.send("Comment Added");
    } catch (error) {
        res.send(error)
    }
})

router.get('/flighthandledBy/:uniqueStr/:handle', async(req,res)=>{
    const {uniqueStr, handle} = req.params
    console.log(handle)
    try {
        const query = await FlightData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {handle: handle}},
            {new: true}
        )

        res.send("handled By Added");
    } catch (error) {
        res.send(error)
    }
})

// *****INSURANCE******

router.get('/insurancecomment/:uniqueStr/:comment', async(req,res)=>{
    const {uniqueStr, comment} = req.params
    try {
        const query = await InsuranceData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {comment: comment}},
            {new: true}
        )

        res.send("Comment Added");
    } catch (error) {
        res.send(error)
    }
})

router.get('/insurancehandledBy/:uniqueStr/:handle', async(req,res)=>{
    const {uniqueStr, handle} = req.params
    console.log(handle)
    try {
        const query = await InsuranceData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {handle: handle}},
            {new: true}
        )

        res.send("handled By Added");
    } catch (error) {
        res.send(error)
    }
    // alert(`${handle}`)
})

// *****Non E Visa******

router.get('/nonevisacomment/:uniqueStr/:comment', async(req,res)=>{
    const {uniqueStr, comment} = req.params
    try {
        const query = await NonEvisaFormData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {comment: comment}},
            {new: true}
        )

        res.send("Comment Added");
    } catch (error) {
        res.send(error)
    }
})

router.get('/nonevisahandledBy/:uniqueStr/:handle', async(req,res)=>{
    const {uniqueStr, handle} = req.params
    console.log(handle)
    try {
        const query = await NonEvisaFormData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {handle: handle}},
            {new: true}
        )

        res.send("handled By Added");
    } catch (error) {
        res.send(error)
    }
})

// *****Package******

router.get('/packagecomment/:uniqueStr/:comment', async(req,res)=>{
    const {uniqueStr, comment} = req.params
    try {
        const query = await PackageData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {comment: comment}},
            {new: true}
        )

        res.send("Comment Added");
    } catch (error) {
        res.send(error)
    }
})

router.get('/packagehandledBy/:uniqueStr/:handle', async(req,res)=>{
    const {uniqueStr, handle} = req.params
    console.log(handle)
    try {
        const query = await PackageData.findOneAndUpdate(
            {uniqueStr: uniqueStr},
            {$set: {handle: handle}},
            {new: true}
        )

        res.send("handled By Added");
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
