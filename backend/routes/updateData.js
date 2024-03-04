const express = require('express')
const FormData = require('../models/FormData')

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

// router.get('/setGranted/:uniqueStr/:selectOption', async(req,res)=>{
//     const {uniqueStr, selectOption} = req.params;

//     try {
//         const query = await FormData.findOneAndUpdate(
//             {uniqueStr: uniqueStr},
//             {$set: {visaGranted: selectOption}},
//             {new: true}
//         )

//         res.send("Result displayed")
//     } catch (error) {
//         res.send(error)
//     }
// })

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

module.exports = router
