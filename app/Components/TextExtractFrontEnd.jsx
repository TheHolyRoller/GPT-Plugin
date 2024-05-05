'use client'
import React, { useState } from 'react';
import axios from 'axios';


const PdfTextExtractor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleFileChange = (e) => {

    setSelectedFile(e.target.files[0]); 
    console.log("file has just been submitted"); 
    console.log("this is the current selected file", selectedFile); 
    
}

  

const uploadFile = async () => {

  console.log('upload button just clicked')
  console.log('this is the upload file function'); 

  if(selectedFile){

      console.log('there is a selected file'); 
      console.log('this is the current selected file', selectedFile); 

  //Create a new instance of format data here 
  const formatData = new FormData(); 
  console.log('this is the form data', formatData); 
  
  //Now append the current selected file to the new instance of format Data 
  formatData.append('pdfFile', selectedFile); 
  console.log('this is the form data with the appended file', formatData); 
  console.log('this is the type of form data', typeof formatData); 

  

  // Find out why this is not running now
  //Now setup the axios post request to send this file over to the server 
  try {

      console.log('WHY IS THIS NOT RUNNING!@##@'); 
    
      const response = await axios.post('http://localhost:3000/extract-text', formatData);
      console.log(response.data.message);
      console.log('IS THIS CODE RUNNING'); 
      console.log('this is the type of response from the server', typeof response);
      console.log('this is the message part of the response', response.data.message);
      console.log('this is the data part of the response from the server', response.data); 
      
      console.log('this is the response', response); 

      setExtractedText(response.data.text); // Set the extracted text in state

      console.log('this is the extracted text', extractedText); 
      
      console.log('just before the analyze text try block'); 

      

    } catch (error) {
      console.error('File not uploaded to server', error);
      console.error("this is really frustrating"); 

    }
  

  }
      
  else{


  console.error("Could not upload file to server"); 
  console.error("Are you sure you uploaded pdf format"); 


  }



}

  return (
   
    <section id='fileUploadSection'  >
    <div id='formInputSection' >

    <form id='fileInputForm' onSubmit={uploadFile}  >
    <input type='file' name='pdf' id='fileInput' onChange={handleFileChange} />
    <button style={{outline: '10px solid blue', color: 'black'}}  id='fileSubmit' type='button' onClick={uploadFile}>
        Upload PDF File

    </button>
    </form>
        
    </div>

    <article id='responseSection' >
        <button>

        <h1 id='extractedTextHeadline' >Extracted Text</h1>
        </button>

        <div id='extractedText'>
            

        {extractedText && <div><strong>Extracted Text:</strong> {extractedText}</div>}
        </div>

    </article>

</section>

);

};

export default PdfTextExtractor;
