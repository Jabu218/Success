// routes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const { addFileRecord, getAllFileRecords } = require('./database');
const xlsx = require('xlsx'); // Import the xlsx package

const router = express.Router();

// Set storage engine for Multer
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use original file name
    },
});

// Initialize upload variable
const upload = multer({
    storage: storage,
}).fields([{ name: 'fileUpload' }, { name: 'excelUpload' }]); // Expecting two file uploads

// Endpoint to handle file uploads
router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).send('Error uploading file');
        }

        // Create a record of the uploaded file
        const fileRecord = {
            accountNumber: req.body.accountNumber,
            description: req.body.description,
            blankColumn1: req.body.blankColumn1,
            blankColumn2: req.body.blankColumn2,
            blankColumn3: req.body.blankColumn3,
            transactionDate: req.body.transactionDate,
            fileName: req.files.fileUpload[0].originalname,
        };

        addFileRecord(fileRecord); // Store the record in the database

        // Handle the Excel file if provided
        if (req.files.excelUpload && req.files.excelUpload.length > 0) {
            const excelFilePath = path.join(__dirname, 'uploads', req.files.excelUpload[0].originalname);
            const workbook = xlsx.readFile(excelFilePath);

            // Assuming the data is in the first sheet
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = xlsx.utils.sheet_to_json(sheet);

            // Process each row of the JSON data
            jsonData.forEach(row => {
                const excelRecord = {
                    accountNumber: row['Account Number'],
                    description: row['Description'],
                    blankColumn1: row['Blank Column 1'] || '',
                    blankColumn2: row['Blank Column 2'] || '',
                    blankColumn3: row['Blank Column 3'] || '',
                    transactionDate: row['Transaction Date'] || '',
                };

                addFileRecord(excelRecord); // Add each record to the database
            });
        }

        res.send('File uploaded successfully');
    });
});

// Endpoint to fetch all file records
router.get('/files', (req, res) => {
    const files = getAllFileRecords();
    res.json(files);
});

// Exporting the router
module.exports = router;
