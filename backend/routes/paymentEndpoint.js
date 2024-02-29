const express = require('express');
const axios = require('axios');
// const uniqid = require('uniqid');
const crypto = require('crypto');
const cors = require('cors'); // Import the cors middleware
const { appendFile } = require('fs');
const { error } = require('console');
const FormData = require('../models/FormData')

const API_URL = 'www.api.tripsytrips.com';
const WEB_URL = 'wwww.tripsytrips.com'|| 'tripsytrips.com';

const router = express.Router();

// Test Vars
const PHONE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const SALT_INDEX = 1;

// Add CORS middleware
router.use(cors());

router.post('/', (req, res) => {

    const { name, contact, totalCost, uniqueStr } = req.body

    const payEndpoint = "pg/v1/pay";
    const merchantTransactionId = uniqueStr;
    const data = {
        "merchantId": MERCHANT_ID,
        "merchantTransactionId": merchantTransactionId,
        "merchantUserId": "MUID123",
        "name": name,
        "amount": Number(totalCost) * 100, //in paise
        "redirectUrl": `https://${API_URL}/api/phonepe/redirect-url/${merchantTransactionId}`,
        "redirectMode": "REDIRECT",
        "mobileNumber": contact,
        "paymentInstrument": {
            "type": "PAY_PAGE"
        }
    }

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString('base64');
    const keyIndex = 1;
    const string = payloadMain + '/pg/v1/pay' + SALT_KEY;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    const options = {
        method: 'post',
        url: `${PHONE_HOST_URL}/${payEndpoint}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum
        },
        data: {
            request: payloadMain
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            const url = response.data.data.instrumentResponse.redirectInfo.url;
            // Send the URL back to the client as the response
            res.status(200).json({ redirectUrl: url });
            // res.redirect(url)
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).send('Internal server error'); // Return an error response
        });
});

const setPayment = async(merchantTransactionId) =>{
    try {
        const query = await FormData.findOne({uniqueStr: merchantTransactionId})
        if(query){
            query.paymentStatus = "Completed"
            await query.save();
            console.log(query)
        }
        else{
            console.log("No Query Found")
        }
    } catch (error) {
        console.error('Error updating payment status:', error);
    }
}

router.get('/redirect-url/:merchantTransactionId', (req, res) => {
    const { merchantTransactionId } = req.params

    console.log('Merchant Transaction Id', merchantTransactionId)
    if (merchantTransactionId) {


        const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + SALT_KEY;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + "###" + SALT_INDEX;

        const options = {
            method: 'get',
            url: `${PHONE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': `${MERCHANT_ID}`
            },

        };
        axios.request(options).then(async(response) => {
            if (response.data.success === true) {
                const url = `https://${WEB_URL}/success`;

                setPayment(merchantTransactionId)
                return res.redirect(url)
            } else {
                const url = `https://${WEB_URL}/failure`
                return res.redirect(url)
            }
        }).catch((error) => {
            console.error(error);
        });
    };
    
})

module.exports = router;
