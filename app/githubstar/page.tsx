'use client'

import { useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GoldFilledStarButton() {
  const [count, setCount] = useState(68)
  const [isStarred, setIsStarred] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsStarred(!isStarred)
    setCount(prevCount => isStarred ? prevCount - 1 : prevCount + 1)
    setIsGlowing(true)
    setTimeout(() => setIsGlowing(false), 1000) // Stop glowing after 1 second
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsStarred(false)
      setCount(68)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <button
        ref={buttonRef}
        className="flex items-center bg-black rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <div className="flex items-center px-4 py-2 border-r border-gray-700">
          <div className="relative w-5 h-5 mr-2">
            <Star 
              onClick={handleStarClick}
              className={`w-5 h-5 transition-all duration-300 ease-in-out cursor-pointer
                ${isStarred ? 'text-yellow-400' : 'text-gray-400'}
                hover:text-yellow-400`}
              fill={isStarred ? 'currentColor' : 'none'}
            />
            <AnimatePresence>
              {isGlowing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.4, scale: 1.6 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 bg-yellow-400 rounded-full"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-white font-sfpro font-medium">Star</span>
        </div>
        <div className="px-4 py-2 relative w-12 h-8">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={count}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(8px)', y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center text-gray-300 font-sfpro font-medium"
            >
              {count}
            </motion.span>
          </AnimatePresence>
        </div>
      </button>
    </div>
  )
}