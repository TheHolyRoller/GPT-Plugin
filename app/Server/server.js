    const express = require('express');
    const multer = require('multer');
    const PDFExtract = require('pdf.js-extract').PDFExtract;
    const cors = require('cors');
    const app = express();


    const openai = require('openai');
    require('dotenv').config();

    // const apiKey = "";
    const apiKey = process.env.OPENAI_API_KEY;
    // const openaiClient = new openai(apiKey);
    const openaiClient = new openai.OpenAI({
        apiKey: apiKey
      });
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
        //Remove this response and instead send the response from Open AI API 
        // res.send(extractedText);


        // Take all this out and put it in another api endpoint 

        const businessIdeaDescription = extractedText; 
        
        // Create another try catch block here 
        // And set everything up to send the extracted text with the prompt & parameter to gpt 


    const prompt = `
    As an experienced business analyst, evaluate the following business idea based on its feasibility, profitability, potential markets, type of funding required, and estimated time to become profitable.

    Business Idea Description:
    "${businessIdeaDescription}"

    Please provide a detailed analysis including:
    1. **Feasibility**:
    - What are the major operational hurdles?
    - What are the technological, market, or regulatory challenges?
    - Is the business model sustainable in the long term?

    2. **Profitability**:
    - What are the primary revenue streams?
    - What is the projected cost structure (fixed and variable costs)?
    - What are the initial and ongoing expenses?
    - Provide an estimate of the break-even point.

    3. **Potential Markets**:
    - Who is the target audience?
    - What is the size of the potential market?
    - What are the geographical areas where the business could thrive?
    - What are the growth prospects in these markets?

    4. **Funding Requirements**:
    - What types of funding are most suitable for this business (e.g., angel investment, venture capital, loans, crowdfunding)?
    - How much capital is required to start and sustain operations until the business becomes self-sustaining?

    5. **Time to Profitability**:
    - Based on the cost structure and revenue projections, estimate how long it will take for the business to become profitable.

    Conclude with a summary that integrates all the aspects into a final recommendation on the viability of the business idea.
    `;

    // You would use this `prompt` variable as a parameter in your API call to the OpenAI API.



    
        try{

            const openaiResponse = await openaiClient.createCompletion({
                model: "text-davinci-002",
                prompt: prompt,
                max_tokens: 1000,
            });
    
            // Send the OpenAI API's response back to the client
            res.json({ analysis: openaiResponse.data.choices[0].text });

        }
        catch(error){

            console.error("Oh dear the pipeline is all messed up", error.message); 
            console.error('looks like this will require some fixing'); 



        }



    } catch (error) {
        console.error('Error during text extraction:', error.message);
        res.status(500).send(error.message);
    }
    });

    // Add in the Call Open AI API Function here 
    async function callOpenAI(extractedText) {
        // Define the prompt with the extracted text integrated into it
        const prompt = `Here is an idea for analysis: ${extractedText} Please provide your feedback.`;
      
        // Make the API call to OpenAI
        const openaiResponse = await openaiClient.createCompletion({
          model: "text-davinci-002", // Specify the model
          prompt: prompt,            // Use the prompt with the extracted text
          max_tokens: 1000           // Set the maximum number of tokens to generate
        });
      
        // Return the response from OpenAI
        return openaiResponse.data.choices[0].text;
      }


    // Add in the Open AI API Endpoint here 
    // Example of an Express.js route that uses the function
app.post('/analyze-text', async (req, res) => {
    try {
      // Extract the text from the request body
      const extractedText = req.body.text;
  
      // Call the OpenAI API with the extracted text
      const analysis = await callOpenAI(extractedText);
  
      // Send the analysis back to the front end
      res.json({ analysis: analysis });
    } catch (error) {
      // Handle any errors
      res.status(500).send(error.message);
    }
  });






    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
