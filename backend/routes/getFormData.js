const express = require('express')
const FormData = require('../models/FormData');
const router = express.Router()
const multer = require('multer');
const path = require('path');
const DocumentData = require('../models/CountryImages')
const NonEvisaFormData = require('../models/NonEvisaModel')
const FlightData = require('../models/Flight')
const ContactData = require('../models/ContactForm')
const InsuranceData = require('../models/Insurance')
const PackageData = require('../models/Package');
const NewsletterData = require('../models/Newsletter');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Uploads will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original filename
    }
});

const upload = multer({ storage: storage })


const genDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero indexed
    const day = ('0' + currentDate.getDate()).slice(-2);

    const hyphenSeparatedDate = `${year}-${month}-${day}`;
    return hyphenSeparatedDate

}

// ROUTE: 1 Catches information from E-Visa form 
router.post('/', async (req, res) => {
    try {

        const { name,
            email,
            contact,
            travellerCount,
            totalCost,
            eVisa,
            uniqueStr,
            visaName,
            departDates,
            returnDates,
            documentUniqueStrs,
            portOfEntry,
            hotelAddress,
            hotelPostalCode,
            mstatus
        } = req.body;

        console.log(name)
        console.log(email)
        // console.log(mstatus)
        // console.log(req.body)

        const date = genDate()


        const formData = new FormData({
            name,
            email,
            contact,
            travellerCount,
            totalCost,
            eVisa,
            departDates,
            returnDates,
            uniqueStr,
            visaName,
            documentUniqueStrs,
            portOfEntry,
            hotelAddress,
            hotelPostalCode,
            mstatus
        });


        await formData.save();

        res.status(201).send(req.body);
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE: 2 Uploads Documents from E-visa form

router.post('/uploadDocs', upload.single('documents'), async (req, res) => {

    try {
        const { documents } = req.file;
        const { name, uniqueStr } = req.body;


        const documentData = new DocumentData({
            name: req.file.originalname,
            documentPath: req.file.path, // Path where the document is saved
            uniqueStr
        });

        // console.log(documentData)
        await documentData.save();

        res.status(201).send('Document uploaded successfully');
    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE: 3 Catch data from Non-eVisa Form

router.post('/uploadNonEvisa', async (req, res) => {
    try {
        const { name,
            email,
            contact,
            departDates,
            returnDates,
            visaName } = req.body

        const data = new NonEvisaFormData({
            name,
            email,
            contact,
            departDates,
            returnDates,
            visaName
        })

        await data.save()
        res.status(201).send('Document uploaded successfully');

    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
})

// ROUTE: 4 Catch data from Flight Form
router.post('/flight', async (req, res) => {
    try {
        const { name,
            email,
            contact,
            type,
            destination,
            location,
            departDate,
            arrivalDate,
            trip
         } = req.body

        const data = new FlightData({
            name,
            email,
            contact,
            type,
            destination,
            location,
            departDate,
            arrivalDate,
            trip
        })

        await data.save()
        res.status(201).send('Document uploaded successfully');

    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
})

// ROUTE: 5 Catch data from Hotel Form
router.post('/contact', async (req, res) => {
    try {
        const { name,
            email,
            contact,
            subject,
            description
         } = req.body

        const data = new ContactData({
            name,
            email,
            contact,
            subject,
            description
        })

        await data.save()
        res.status(201).send('Document uploaded successfully');
    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
})

// ROUTE: 6 Catch data from Insurance Form
router.post('/insurance', async (req, res) => {
    try {
        const { name,
            email,
            contact,
            place,
            departDate,
            returnDate
         } = req.body

        const data = new InsuranceData({
            name,
            email,
            contact,
            place,
            departDate,
            returnDate
        })

        await data.save()
        res.status(201).send('Document uploaded successfully');

    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
})

// ROUTE: 6 Catch data from Packages Form

router.post('/packages', async(req, res)=>{
    try {
        const {
            name,
            email,
            contact,
            departDate,
            returnDate,
            place
        } = req.body

        const data = new PackageData({
            name,
            email,
            contact,
            departDate,
            returnDate,
            place
        })
        await data.save()
        res.status(201).send('Document uploaded successfully');

    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/newsletter', async(req, res)=>{
    try {
        const {email} = req.body

        const data = new NewsletterData({
            email
        })
        await data.save()
        res.status(201).send('Document uploaded successfully');
    } catch (error) {
        console.error('Error uploading document:', error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router
