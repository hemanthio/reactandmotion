// "use client" 

// import React from 'react'
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from 'geist/font/mono';

// const page = () => {
//   return (
//     <div className={`${GeistMono.className} flex flex-col gap-5 justify-center items-center h-screen bg-black`} style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
//       <h1 className={`text-5xl text-center tracking-tight font-semibold uppercase ${GeistMono.className} text-white`}>
//         Website section <br />
//         Component library
//       </h1>
//       <p className='text-white'>
//       Streamlined Components for Fast and Consistent Website Building
//       </p>
//       <button className='bg-white px-5 py-4 text-black rounded-xl'>
//         Browse components
//       </button>
//     </div>
//   )
// }

// export default page


"use client"
import React from 'react'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono';
import ScrambleButton from './ScrambleButton ';
import SVGComponent from './supaspark'

const page = () => {
  return (
    <div className={`${GeistMono.className} flex flex-col gap-5 justify-center items-center h-screen bg-black`} 
      style={{ 
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }}>
        <div className='text-center'>
        <h1 className='text-white ml-6'>Supaspark</h1>
        <SVGComponent className="text-white"/>
        </div>
      <h1 className={`text-5xl text-center tracking-tight font-semibold uppercase ${GeistMono.className} text-white`}>
        Website section <br />
        Components library
      </h1>
      <p className='text-white'>
        Streamlined Components for Fast and Consistent Website Building
      </p>
      
      <ScrambleButton  text="Browse components" />
      
    </div>
  )
}

export default page