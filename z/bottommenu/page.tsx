'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (event.clientX - centerX) / (rect.width / 4);
    const deltaY = (event.clientY - centerY) / (rect.height / 4);
    
    setRotateX(-deltaY * 15);
    setRotateY(deltaX * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        className="h-full w-full flex flex-col justify-center items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1500,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          mass: 0.5
        }}
      >
        <div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(40px)'
          }}
        >
          <div className="w-[400px] h-[250px] rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1730292423126-077dd3750a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="Hero image"
            />
          </div>
          
          <motion.h1
            className="text-lg opacity-80 mt-2 uppercase font-mono text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;