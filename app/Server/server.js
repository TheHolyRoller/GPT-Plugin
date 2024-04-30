const express = require('express');
const multer = require('multer');

//This is causing the error I think the path might be wrong 
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
const cors = require('cors');
const app = express();



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

// Function to extract text from PDF using pdfjs-dist
async function extractTextFromPDF(pdfBuffer) {
  const loadingTask = pdfjsLib.getDocument({ data: pdfBuffer });
  const pdf = await loadingTask.promise;
  let extractedText = '';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    extractedText += pageText + '\n';
  }

  return extractedText;
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


