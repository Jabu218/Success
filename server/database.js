// database.js
let filesDatabase = [];

// Function to add a file record
const addFileRecord = (record) => {
    filesDatabase.push(record);
};

// Function to get all file records
const getAllFileRecords = () => {
    return filesDatabase;
};

// Exporting the functions
module.exports = {
    addFileRecord,
    getAllFileRecords,
};
