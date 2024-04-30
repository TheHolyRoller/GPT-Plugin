                'use client'
                import React, { useState } from 'react';
                import axios from 'axios';


                function FileUpload() {


                //Add in the state setup here
                const [selectedFile, setSelectedFile] = useState(null);

                //Add in the handle file change function here 
                const handleFileChange = (e) => {

                    setSelectedFile(e.target.files[0]); 
                    console.log("file has just been submitted"); 



                }

                //Add in the upload file to server function here 

                const uploadFile = () => {


                    if(selectedFile){

                    //Create a new instance of format data here 
                    const formatData = new FormData(); 
                    
                    //Now append the current selected file to the new instance of format Data 
                    formatData.append('file', selectedFile); 


                    //Now setup the axios post request to send this file over to the server 
                    axios.post('/extract-text', formatData).then((response) => console.log("File has been uploaded successfully!", response.data))
                    .catch((error) => {

                        console.error("things did not work out as hoped!:(");
                        console.error("file not uploaded to server"); 
                        

                    } );
                    


                    }
                        
                    else{


                    console.error("Could not upload file to server"); 
                    console.error("Are you sure you uploaded pdf format"); 



                    }



                }



                return (

                <section id='fileUploadSection' >

                    <form id='fileInputForm' onSubmit={uploadFile}  ></form>
                    <input type='file' name='pdf' id='fileInput' onChange={handleFileChange} />
                    <button id='fileSubmit' type='submit'>
                        Upload PDF File


                    </button>


                </section>

                )
                }

                export default FileUpload