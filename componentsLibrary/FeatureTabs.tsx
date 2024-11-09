'use client'

import React,{useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'


const FeatureTabs = () => {

    const [activetab, setactivetab] = useState("cobrand")
    const tabs =[
        {
            id:1,
            value:"cobrand",
            imgUrl:"https://images.unsplash.com/photo-1729205971245-814008c672a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
            name:"Cobranded landing Page",
            heading :"Transform every referral link into a personalized commerce experience",
            subheading:"With Superfiliate, every customer and creator will automatically have their own personalized landing page generated for them. If they d like, they can also customize their page with their own content, favorite products and more."
        },
        {
            id:2,
            name:"Portal",
            value:"portal",
            imgUrl:"https://images.unsplash.com/photo-1730435136320-1410fa8bed02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
            heading :"A hub for all your customers",
            subheading:"will automatically have their own personalized landing page generated for them. If they d like, they can also customize their page with their own content, favorite products and more"
        },
        {
            id:3,
            name:"Program widget",
            value:"program",
            imgUrl:"https://images.unsplash.com/photo-1730754275537-c8985a93ad53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
            heading :"Transform every referral link into a personalized commerce experience",
            subheading:"With Superfiliate, every customer and creator will automatically have their own personalized landing page generated for them. If they’d like, they can also customize their page with their own content, favorite products and more."
        },

    ]
  return (
    <div >
    <div className='h-screen font-sfpro   bg-black'>
    <div className='flex relative justify-center'>
        <div className='flex absolute top-5 space-x-5 rounded-md border-[1px] border-white font-semibold bg-black text-white'>
        {tabs.map((tab,index)=>(
            <motion.div 
           
            
            onClick={()=>setactivetab(tab.value)}
            // className={`${activetab==tab.value ? "hover:bg-white hover:text-black":"hover:bg-white/10"} ${activetab===tab.value ? "bg-white text-black rounded-md p-3" : "bg-black text-white "} cursor-pointer hover:rounded-md rounded-md p-3`}
            className='relative cursor-pointer rounded-md p-3'
            initial={false}
            animate={{
              backgroundColor: activetab === tab.value ? "#ffffff" : "rgba(0, 0, 0, 0)", 
              color: activetab === tab.value ? "#000000" : "#ffffff", // black text for active, white text for inactive
            }}
            transition={{ duration: 0.3 ,ease: 'easeInOut',type: 'tween'}}
            whileHover={{
              backgroundColor: activetab === tab.value ? "#ffffff" : "rgba(255, 255, 255, 0.1)", // light hover effect on inactive tabs
              color: activetab === tab.value ? "#000000" : "#ffffff",
            }}
            key={index}>
  {tab.name}
            </motion.div>
        ))}
        </div>

        {/* bottom tab content */}
        <div className='max-w-[700px] absolute top-32 flex gap-12 items-center'>
            <div className=''>
        {/* image */}
        <div className='w-[250px] h-[350px] rounded-xl '>
        <AnimatePresence mode="wait">
          <motion.img
            key={activetab} // Unique key based on the active tab to re-trigger animations
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }} // Smooth exit animation
            transition={{ duration: 0.2 }}
            className="w-full h-full object-cover rounded-xl"
            src={tabs.find((tab) => tab.value === activetab)?.imgUrl}
            alt=""
          />
        </AnimatePresence>
        </div>
            </div>
            <div className='text-white flex flex-col gap-4'>
                <h1 className='text-2xl font-bold '>
                    {tabs.find((tab)=>tab.value===activetab)?.heading}
                </h1>
                <p className='text-lg font-regular'>
              {tabs.find((tab)=>tab.value===activetab)?.subheading}
                </p>
            </div>
        </div>
    </div>
    </div>



    </div>
  )
}

export default FeatureTabs