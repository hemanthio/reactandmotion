'use client'

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Maskgroup from '../../public/task/Maskgroup.png'
import taskbrand from '../../public/task/taskbrand.svg'
import dashboard from '../../public/task/dashboard.png'
import { ArrowRight } from 'lucide-react';

const TaskLanding = () => {
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#030818] relative">
      {/* Background Image */}
      <div className="absolute bg-[#030818] h-[116vh] inset-0 z-0">
        <Image src={Maskgroup} alt="Background" layout="fill" objectFit="cover" className='p-4  rounded-[24px] opacity-100'/>
      </div>
      
      {/* Content Wrapper */}
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Navbar */}
        <motion.div className="container mx-auto px-4 pt-6" variants={staggerVariants}>
          <div className='flex justify-center'>
            <nav className='flex  bg-[#FFFFFF1A] gap-14 items-center justify-center font-sfpro font-[400] text-sm px-[7px] pr-[7px] backdrop-blur-2xl pl-[17px] py-1 rounded-full '>
              <Image src={taskbrand} alt='Taskk Logo' width={89} height={30} />
              <ul className='flex space-x-6 text-[14px] font-[400]  '>
                <li><a href="#" className='text-white hover:text-gray-300'>Home</a></li>
                <li><a href="#" className='text-white hover:text-gray-300'>Products</a></li>
                <li><a href="#" className='text-white hover:text-gray-300 '>Resources</a></li>
                <li><a href="#" className='text-white hover:text-gray-300'>Pricing</a></li>
              </ul>
              <button className='bg-blue-500 text-white px-[18px] py-[10px] rounded-full hover:bg-blue-600'>
                Sign up
              </button>
            </nav>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mt-16 text-center">
          {/* Top Banner */}
          <motion.div className="flex items-center font-sfpro justify-center gap-2 mb-4" variants={staggerVariants}>
            <div className="bg-white/[0.01] shadow-custom-inset backdrop-blur-sm rounded-full pl-1 py-1 pr-3 flex items-center gap-2">
              <span className='bg-white/10 justify-center px-[10px] rounded-full border-[1px] shadow-custom-inset border-[#DFD7FF1A] '>
                <span className="text-[#54B8FF]/50 text-sm">•</span>
                <span className="text-white/70  px-1 text-sm">We're hiring</span>
              </span>
              
              <span className="text-white/70 pt-[1px] text-sm flex items-center">Join our remote team <ArrowRight className="w-4 h-4 ml-1" /></span>
            </div>
          </motion.div>

          <div style={{ width: '670px' }} className="mx-auto ">
            <motion.h1 className="text-white leading-[57px] tracking-tight font-sfpro font-[500] text-[60px]  mb-6" variants={staggerVariants}>
              Manage All of Your Work In One Place Efficiently
            </motion.h1>
            <motion.p className="text-gray-400 text-[16px] w-[500px] mx-auto text-center font-sfpro mb-8" variants={staggerVariants}>
              Manage your work, timeline and team tasks all at once. Set and track timelines, check efficiency and enhance your productivity in check.
            </motion.p>
            
            {/* Email Input Section */}
            <motion.div className="flex gap-4 max-w-md mx-auto" variants={staggerVariants}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-[#FFFFFF26] text-white placeholder-gray-400 focus:outline-none focus:ring-2 font-sfpro border-[1px]  border-[#ffffff1e] focus:ring-blue-500"
              />
              <button className="bg-white text-[16px] font-[500] font-sfpro hover:bg-blue-600 text-black px-8 py-3 rounded-full">
                Get started
              </button>
            </motion.div>
          </div>

          {/* Project UI Preview */}
          <motion.div className="mt-14" variants={staggerVariants}>
            <div className=" rounded-md  max-w-5xl mx-auto">
              <Image src={dashboard} alt='' className='w-full h-full rounded-3xl '/>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskLanding;