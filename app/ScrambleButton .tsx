"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ScrambleButton = ({ text = "Browse components", className = "" }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [iteration, setIteration] = useState(0);
  
  const letters = "abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/=";

  const scrambleText = (iteration: number) => {
    return text
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
  };
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null; // Specify the type for interval

    if (isHovered) {
      interval = setInterval(() => {
        setIteration(prev => {
          const newIteration = Math.min(prev + 1, text.length); // Ensure newIteration does not exceed text length
          setDisplayText(scrambleText(newIteration));
          
          if (newIteration >= text.length) {
            clearInterval(interval!); // Use non-null assertion since we check for null
          }
          
          return newIteration;
        });
      }, 40);
    } else {
      setIteration(0);
      setDisplayText(text);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, text]);
  
  const handleClick = () => {
    router.push('/components');
  };

  return (
    <button 
      className={`bg-white px-5 py-4 text-black rounded-xl transition-all duration-300 hover:bg-opacity-100 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {displayText}
    </button>
  );
};

export default ScrambleButton;