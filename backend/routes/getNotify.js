const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

// const emailjs = require('emailjs');

async function sendConfirmationMail( type, name) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'hello@tripsytrips.com', // Your Gmail address
            pass: 'gjsr ybse pnbb zbdg' // Your Gmail password
        },
        debug: true
    });

    // Email content
    let mailOptions = {
        from: {
            name: "Tripsy Trips Website",
            address: "hello@tripsytrips.com"
        },
        to: "info@tripsytrips.com",
        subject: `New Query!! ${name} wants to get in touch.`,
        text: `You have a new ${type} query from ${name}`
    };

    try {
        let info =  await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.log('Error occurred while sending email: ' + error);
    }
}


router.post('/package', async (req, res) => {
   try {
    const {type, name} = req.body;
    sendConfirmationMail(type, name)
    res.send("Emaill has been sent")
   } catch (error) {
    res.send(error)
   }
});

router.post('/flight', async (req, res) => {
    try {
     const {type, name} = req.body;
     sendConfirmationMail(type, name)
     res.send("Emaill has been sent")
    } catch (error) {
     res.send(error)
    }
 });

 router.post('/hotel', async (req, res) => {
    try {
     const {type, name} = req.body;
     sendConfirmationMail(type, name)
     res.send("Emaill has been sent")
    } catch (error) {
     res.send(error)
    }
 });

 router.post('/insurance', async (req, res) => {
    try {
     const {type, name} = req.body;
     sendConfirmationMail(type, name)
     res.send("Emaill has been sent")
    } catch (error) {
     res.send(error)
    }
 });

 router.post('/evisa', async (req, res) => {
    try {
     const {type, name} = req.body;
     sendConfirmationMail(type, name)
     res.send("Emaill has been sent")
    } catch (error) {
     res.send(error)
    }
 });

 router.post('/nonevisa', async (req, res) => {
    try {
     const {type, name} = req.body;
     sendConfirmationMail(type, name)
     res.send("Emaill has been sent")
    } catch (error) {
     res.send(error)
    }
 });

module.exports = router;
