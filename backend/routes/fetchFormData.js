const { json } = require('express');
const express = require('express');
const archiver = require('archiver');
const fs = require('fs')
const NonEvisaFormData = require('../models/NonEvisaModel')
const PackageData = require('../models/Package')
const FlightData = require('../models/Flight')
const ContactData = require('../models/ContactForm')
const InsuranceData = require('../models/Insurance')
const FormData = require('../models/FormData')
const DocumentData = require('../models/CountryImages');
const NewsletterData = require('../models/Newsletter');


const router = express.Router();


//Route 1: Get Non E Visa Data using: GET "/api/fetchFormData/nonEvisa"
router.get('/nonEvisa', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await NonEvisaFormData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 2: Get Non E Visa Data using: GET "/api/fetchFormData/packages"

router.get('/packages', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await PackageData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 3: Get Non E Visa Data using: GET "/api/fetchFormData/flights"

router.get('/flights', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await FlightData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 4: Get COntact form Data using: GET "/api/fetchFormData/contact"

router.get('/contact', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await ContactData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 5: Get Non E Visa Data using: GET "/api/fetchFormData/insurance"

router.get('/insurance', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await InsuranceData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 6: Get Non E Visa Data using: GET "/api/fetchFormData/evisa"

router.get('/evisa', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await FormData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 7: Get Non E Visa Document using: GET "/api/fetchFormData/evisaDocs"

router.get('/evisaDocs', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    try {
        const data = await DocumentData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//Route 8: Download Non E Visa Document using: GET "/api/fetchFormData/download"

router.post('/download', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        // Create a new instance of archiver
        const zip = archiver('zip');

        // Set the response header to indicate a zip file download
        res.attachment('documents.zip');

        // Pipe the archive to the response stream
        zip.pipe(res);

        // Loop through the documents provided by the client and add them to the zip file
        req.body.forEach(doc => {
            // Assuming doc.documentPath contains the file path of each document
            // Ensure that the file paths are correct and accessible
            // Ensure that the 'name' property is the desired name of the file in the zip archive
            zip.append(fs.createReadStream(doc.documentPath), { name: doc.name });
        });

        // Finalize the zip file
        zip.finalize();
    } catch (error) {
        console.error('Error creating zip file:', error);
        res.status(500).send('Internal Server Error');
    }
});


//Route 8: Get Newsletter data using: GET "/api/fetchFormData/newsletter"

router.get('/newsletter', async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
        const data = await NewsletterData.find({});
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})



module.exports = router