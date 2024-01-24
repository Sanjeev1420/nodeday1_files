const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port =  process.env.port || 4000;
const folderPath = path.join(__dirname,'../','notes');



// Endpoint to create a file with the current date-time as the name and content of the current timestamp.
app.post('/createFile', (req, res) => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); 
const yyyy = today.getFullYear();
const HH = String(today.getHours()).padStart(2, '0');
const MM = String(today.getMinutes()).padStart(2, '0');
const SS = String(today.getSeconds()).padStart(2, '0');

const formattedDateTime = `${dd}_${mm}_${yyyy}_${HH}_${MM}_${SS}`;
    const fileName = `${formattedDateTime}.txt`;
    const filePath = path.join(folderPath, fileName); 

    fs.writeFile(filePath, formattedDateTime, (error) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).send(`${fileName} File created successfully!`);
        }
    });
});

// Endpoint to retrieve all the text files in the folder 'notes'
app.get('/getAllFiles', (req, res) => {
    fs.readdir(folderPath, (error, files) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(201).send({ files });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
