'use client';

import { useState } from "react"
import { motion } from "framer-motion"


const unsplashImages = [
  "https://images.unsplash.com/photo-1725958171160-8ecf4b20113d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1728847031685-102957148475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731331215550-1c1f6b82daaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731462385471-90cf5aa51848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731657936504-dedca41448a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731600512388-aec36dce82b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731507389979-58bf7464dc38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHVuc3BsdXNofGVufDB8fHx8MTYyMjY5MjY0NQ&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1731141028975-3eb6b91cef4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D"
];

export default function ImageGallery() {
  const [expandedIndex, setExpandedIndex] = useState(4)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="flex gap-1 h-[600px] items-center">
        {unsplashImages.map((src, index) => (
          <motion.div
            key={index}
            className="relative h-full bg-neutral-900 rounded-lg overflow-hidden cursor-pointer"
            initial={{ width: index === 4 ? "400px" : "60px" }}
            animate={{ width: expandedIndex === index ? "400px" : "60px" }}
            onHoverStart={() => setExpandedIndex(index)}
            onHoverEnd={() => setExpandedIndex(4)}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={600}
              className={`object-cover h-full w-full transition-all duration-300 ${
                expandedIndex === index ? "" : "grayscale"
              }`}
              loading={index === 4 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}