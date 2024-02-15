const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const router = express.Router();
const cors = require('cors');

router.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './formDataDoc/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', upload.array('images'), (req, res) => {
    try {
        const uploadedFiles = req.files;
        // Handle the uploaded files as needed
        res.status(200).json({ message: 'Images uploaded successfully', files: uploadedFiles });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
