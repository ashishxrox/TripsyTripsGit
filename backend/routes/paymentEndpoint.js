require('dotenv').config({ path: '../.env' })

const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');
const FormData = require('../models/FormData');
const jwt = require('jsonwebtoken');

// Production URL
const API_URL = 'https://www.api.tripsytrips.com';
const WEB_URL = 'www.tripsytrips.com' || 'tripsytrips.com';

// Razorpay Configuration
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY, // Store these in .env file
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// Add CORS middleware
const router = express.Router();
router.use(cors());

var eMail = '';
var uniquestr = ''

router.post('/', async (req, res) => {
    const { name, contact, totalCost, uniqueStr, email } = req.body;
    eMail = email;
    uniquestr = uniqueStr

    const options = {
        amount: Number(totalCost) * 100, // Razorpay amount is in paise
        currency: "INR",
        receipt: uniqueStr,
    };

    try {
        const order = await razorpayInstance.orders.create(options);
        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            key: process.env.RAZORPAY_API_KEY, // Send the Razorpay key to frontend
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).send('Internal server error');
    }
});

const setPayment = async (merchantTransactionId) => {
    try {
        const updatedPayment = await FormData.findOneAndUpdate(
            { uniqueStr: merchantTransactionId },
            { $set: { paymentStatus: 'Payment done' } },
            { new: true }
        );
        console.log(updatedPayment);
    } catch (error) {
        console.error('Error updating payment status:', error);
    }
};

async function sendConfirmationMail(email) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'hello@tripsytrips.com',
            pass: 'gjsr ybse pnbb zbdg',
        },
    });

    let mailOptions = {
        from: {
            name: "Tripsy Trips",
            address: "hello@tripsytrips.com",
        },
        to: email,
        subject: 'Visa Application Submitted Confirmation',
        text: 'Thank you for submitting your application. We will verify your document and send you an email once your visa has been applied.',
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.log('Error occurred while sending email: ' + error);
    }
}

router.post('/verify-payment', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET_KEY);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest === razorpay_signature) {
        await setPayment(uniquestr);
        await sendConfirmationMail(eMail);
        // Generate a JWT token that expires in 10 minutes
        // const token = jwt.sign({ uniqueStr: uniquestr }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // res.redirect(`${API_URL}/api/phonepe/thank-you?token=${token}`);
        res.redirect(`https://tripsytrips.com/thank-you`);
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'Invalid signature' });
    }
});

router.get('/thank-you', (req, res) => {
    const token = req.query.token;

    if (!token) {
        return res.status(403).send('Access denied.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // If the token is valid, let the frontend handle the rest
        res.redirect(`https://tripsytrips.com/thank-you?token=${token}`);
    } catch (err) {
        res.redirect('/');
    }
});

module.exports = router;
