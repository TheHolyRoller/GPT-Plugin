'use client'
// File: components/FileUpload.js
import '../Styles/Upload.css'; 

import React, { useState } from 'react';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        console.log('new file uploaded')
        setFile(event.target.files[0]);
        console.log('this is the selected file', file); 
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a PDF file first.');
            console.log('no file provided'); 
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('pdfFile', file);
        console.log('this is the form data with the file appended', formData); 
        console.log('this is the type of form data', typeof formData); 


        try {
            const uploadRes = await fetch('http://localhost:3000/upload-pdf', {
                method: 'POST',
                body: formData,
            });
            const data = await uploadRes.json();
            console.log('this is the returned data from the upload', data); 
            setText(data.text);
            console.log('this is the new set text', text); 
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file.');
        }
        setLoading(false);
    };

    const analyzeText = async () => {
        if (!text) {
            alert('No text to analyze. Please upload and extract text from a PDF first.');
            console.log('sorry no text to analyze'); 
            return;
        }
        setLoading(true);
        try {
            const analyzeRes = await fetch('http://localhost:3000/analyze-text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });
            const result = await analyzeRes.json();
            console.log('this is the result from the analysis', result); 
            setResponse(result.analysis);
            console.log('this is the newly set response', response); 
            
        } catch (error) {
            console.error('Error analyzing text:', error);
            alert('Failed to analyze text.');
        }
        setLoading(false);
    };

    return (
        <div>
            <h1 style={{outline: '5px solid lime', color: 'black'}} >PDF Text Analysis with AI</h1>
            <input type="file" onChange={handleFileChange} accept=".pdf" />
            <button style={{color: 'black', cursor: 'pointer'}}   onClick={handleUpload} disabled={!file || loading}>
                {loading && file ? 'Extracting...' : 'Upload and Extract Text'}
            </button>
            <button onClick={analyzeText} disabled={!text || loading}>
                {loading && text ? 'Analyzing...' : 'Analyze Text'}
            </button>
            <div>
                {text && <p><strong>Extracted Text:</strong> {text}</p>}
                {response && <p><strong>Analysis Result:</strong> {response}</p>}
            </div>
        </div>
    );
}

export default FileUpload;
