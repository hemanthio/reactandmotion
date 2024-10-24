'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import taskkwhite from '../../public/task/taskkwhite.svg'
import taskdash from '../../public/task/taskdash.svg'
import taskbg from '../../public/task/taskbg.png'

export default function TaskLanding() {
  const [email, setEmail] = useState('')

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 0.3,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    },
  };

  return (
    <div className="min-h-screen text-white font-sfpro relative">
      <Image 
        src={taskbg} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="h-full bottom-20 rounded-sm absolute"
      />
      <div className='bg-[#FFFFFF08] flex'>
        <header className="w-full py-3 px-4 flex justify-between items-center relative z-10 border-b-[1px] text-[13.18px] border-[#FFFFFF24]">
          <div className="flex items-center">
            <Image src={taskkwhite} alt="Taskk Logo" width={89} height={30} />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <div className="relative group">
              <button className="flex items-center hover:text-gray-300">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-gray-300">
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <a href="#" className="hover:text-gray-300">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300">Sign in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Sign up</button>
          </div>
        </header>
      </div>

      <div className='flex justify-end w-full'>
        <main className="w-full py-16 flex flex-col lg:flex-row items-center justify-between  relative z-10">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 pl-12"
            initial="hidden"
            animate="visible"
            variants={staggerVariants}
            style={{ width: '500px', height: '450px', overflow: 'hidden' }}
          >
            <motion.div variants={itemVariants}>
              <button className="border-[1px] border-[#DFD7FF1A] text-white pl-2 pr-4  gap-2 py-2 rounded-full mb-4 flex items-center">
                <div className='flex gap-1 px-1 bg-[#C0C0F81F] border-[#DFD7FF1A] border-[1px] rounded-full'>
              <span className="text-[#D093FF]/50 text-sm">•</span>
                <span className="mr-2">We're hiring</span>
                </div>
                <span className="text-white">Join our remote team →</span>
              </button>
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-5xl font-sfpro font-[500] mb-4"
              variants={itemVariants}
            >
              Manage All of Your Work In One Place Efficiently
            </motion.h1>
            <motion.p 
              className="text-[15.07] mb-6 text-gray-400"
              variants={itemVariants}
            >
              Manage your work, timelines and team mates all at once. Set and follow timelines, assign tasks and keep your projects in check.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 bg-[#ffffff0c] border-[#FFFFFF66] border-[1px] backdrop-blur-lg text-white px-4 py-2 rounded-full flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-white text-black font-sfpro font-[500] px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get started
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={taskdash}
              alt="Taskk application interface"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </main>
      </div>
    </div>
  )
}