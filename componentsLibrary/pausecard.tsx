'use client'

import React, { useState } from 'react';
import { Mail, Instagram, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const InfluencerHub = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full">
        {/* Main Card */}
        <div className="bg-zinc-900 rounded-3xl font-sfpro overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Preview Section */}
          <div className="relative">
            <div className="bg-gradient-to-b from-black/40 to-transparent absolute top-0 left-0 right-0 p-4 z-10">
              <motion.button 
                className={`px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-sm transition ${isHovered ? 'bg-white text-black' : 'bg-zinc-800 text-white'}`}
                initial={{ y: 10 }} animate={{ y: 0 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Send Email</span>
              </motion.button>
            </div>
            
            {/* Product Image */}
            <div className="relative w-full h-64">
              <img 
                src="https://images.unsplash.com/photo-1730483908285-887da89deac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" 
                alt="Product" 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            {/* Social Icons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <motion.div className={` p-2 rounded-full backdrop-blur-sm ${isHovered ? 'bg-white' : 'bg-zinc-900/80'}`} initial={{ y: 10 }} animate={{ y: 0 }}>
                <Music2 className={`w-5 h-5 ${isHovered ? 'text-black' : 'text-white'}`} />
              </motion.div>
              <motion.div className={` p-2 rounded-full backdrop-blur-sm ${isHovered ? 'bg-white' : 'bg-zinc-900/80'}`} 
              initial={{ y: -30 ,opacity:0}}
              animate={{ y: isHovered ? 0 : -30, opacity: isHovered ? 1 : 0 }}
              transition={{duration:0.4}}
              >
                <Instagram className={`w-5 h-5 ${isHovered ? 'text-black' : 'text-white'}`} />
              </motion.div>
            </div>

            {/* User Mention */}
            <motion.div
            
            className={`absolute bottom-3 right-4  backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 ${isHovered ? 'bg-white text-black' : 'text-white bg-zinc-900/80' }`} initial={{ x: 10 }} animate={{  x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0  }}
            transition={{duration:0.3}}
            
            >
              <img 
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-6 h-6 object-cover rounded-full"
              />
              <div className="text-sm">
                <span>@amandajean</span>
                <div className="text-xs text-gray-400">50k followers· 20 min</div>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Influencer, Affiliate And Ambassador Hub
            </h2>
            <p className="text-gray-400 mb-4">
              Run your end to end influencer marketing workflow and give your creators an experience they're excited to share.
            </p>
            <motion.button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${isHovered ? 'bg-white text-black' : 'text-white bg-[#0F0F11] '}`}
              initial={{ y: 10 }} animate={{ y: 0 }}
            >
              See more
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHub;