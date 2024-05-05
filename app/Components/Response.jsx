'use client'
import React, { useState, useEffect } from 'react';

const ChatComponent = () => {
  const [chatResponse, setChatResponse] = useState('');

  // Function to fetch chat response from backend
  const fetchChatResponse = async () => {
    try {
        const response = await fetch('http://localhost:3000/getChatResponse');
        console.log('this is the response object', response);
        const data = await response.json();
        console.log('this is the data from the response', data); 
      setChatResponse(data.response);
    //   console.log('this is the chat response', chatResponse); 
    } catch (error) {
      console.error('Error fetching chat response:', error);
    }
  };

  useEffect(() => {
    
    console.log('this is the chat response', chatResponse);
  }, [chatResponse]);



  return (
    <div>
      {/* <div>{chatResponse}</div> Display the chat response here */}
      <button style={{color: 'black', outline: '10px solid lime'}} onClick={fetchChatResponse}>Get Chat Response</button> {/* Button to trigger fetching of chat response */}
    </div>
  );
};

export default ChatComponent;
