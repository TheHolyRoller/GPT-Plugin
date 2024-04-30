const express = require('express');
const multer = require('multer');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const cors = require('cors');
const app = express();

app.use(cors());

// Set up multer for in-memory file storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Accept PDF files only
    if (!file.originalname.match(/\.(pdf)$/)) {
      req.fileValidationError = 'Only PDF files are allowed!';
      return cb(new Error('Only PDF files are allowed!'), false);
    }
    cb(null, true);
  }
});

// Function to extract text from PDF using pdf.js-extract
async function extractTextFromPDF(pdfBuffer) {
  const pdfExtract = new PDFExtract();
  const options = {}; // Add options here if needed

  return new Promise((resolve, reject) => {
    pdfExtract.extractBuffer(pdfBuffer, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Concatenate all text from the PDF
        let extractedText = '';
        data.pages.forEach(page => {
          page.content.forEach(item => {
            extractedText += item.str + ' ';
          });
        });
        resolve(extractedText);
      }
    });
  });
}

// POST route to handle PDF file upload and text extraction
app.post('/extract-text', upload.single('pdfFile'), async (req, res) => {
  try {
    // Check if file upload has an error
    if (req.fileValidationError) {
      throw new Error(req.fileValidationError);
    }

    const extractedText = await extractTextFromPDF(req.file.buffer);
    // Send the extracted text back to the client or to another API
    res.send(extractedText);
  } catch (error) {
    console.error('Error during text extraction:', error.message);
    res.status(500).send(error.message);
  }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
