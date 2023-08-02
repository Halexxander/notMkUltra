import React, { useState, useEffect } from 'react';
import './homepage.css';
import profileImage from "../assets/OIG.JPG"
import "./Aboutpage"

const Homepage = () => {
  const [typedText, setTypedText] = useState('');
  const originalText = "Hi, I'm Alexander Inyama, and I made this because I was bored";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < originalText.length) {
        setTypedText((prevText) => prevText + originalText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="homepage">
      <div className="circle">
        
        <img src={profileImage} alt="Profile Image" />
      </div>
      <h1 className='myName'>Alexander Inyama</h1>
      <div className="typing-text">{typedText}</div>
      

      
    </div>

   
  );
};

export default Homepage;
