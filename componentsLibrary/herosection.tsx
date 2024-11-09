'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Component() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Affiliate", "Referral", "Influencer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen font-sfpro bg-black text-white flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className=" sm:text-6xl font-bold leading-tight mb-3">
          <div className="bg-gradient-to-r from-white to-gray-400 text-transparent text-5xl  bg-clip-text">Scale end to end</div>
          <div className="h-[1em] text-6xl  mt-3 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 flex items-center bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="text-5xl">programs</div>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
          Empower your customers and creators with cobranded landing pages, cash and store credit rewards, gifts, and much more!
        </p>

        <button 
          className="bg-white text-black rounded-md px-8 py-3 text-lg font-medium transition-all duration-200"
        >
          Book Demo
        </button>
      </div>
    </div>
  )
}