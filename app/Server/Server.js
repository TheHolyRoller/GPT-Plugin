const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const port = 3000;

// Set up storage for incoming files using multer
const storage = multer.memoryStorage(); // Use memory storage to access file data

const upload = multer({ storage: storage });

// Endpoint to handle POST requests of PDF files
app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  // Log the PDF file buffer to the console
  console.log(req.file.buffer);

  // Send the PDF file back to the front end
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=uploaded.pdf',
    'Content-Length': req.file.buffer.length
  });
  res.end(req.file.buffer);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
