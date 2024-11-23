'use client'

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SVGComponent from '../supaspark';
import { GeistSans } from 'geist/font/sans';

const Layout = () => {
  const componentsList = [
    { name: "Herosection", url: "/components/herosection" },
    { name: "FeatureTabs", url: "/components/FeatureTabs" },
    { name: "pausecard", url: "/components/pausecard" },
    { name: "Createnewoptions", url: "/components/Createnewoptions" },
    { name: "task herosection", url: "/components/tasklanding" },
    { name: "glassy sign up", url: "/components/glassysignup" },
    { name: "Theme toggle", url: "/components/Themetoggle" },
    { name: "task herosection", url: "/components/taskherosection" },
    { name: "Interactive icon bar", url: "/components/interactiveiconbar" },
    { name: "Number motion", url: "/components/numbermotion" },
    { name: "Searchbox hover", url: "/components/searchboxhover" },
    { name: "Pricing card", url: "https://symphonious-cranachan-6d7191.netlify.app/" },
    { name: "metricdashboard", url: "/components/metricdashboard" },
  ];
  

  const components = [
    {
      heading: "Herosection",
      subheading: "An interactive hero section component designed to capture user attention.",
      url: "/components/herosection",
      image: "/thumbnails/herosection.png" // Assuming the image file name
    },
    {
      heading: "FeatureTabs",
      subheading: "A component that allows users to switch between different features seamlessly.",
      url: "/components/FeatureTabs",
      image: "/thumbnails/featuretabs.png" // Assuming the image file name
    },
    {
      heading: "pausecard",
      subheading: "A customizable modal dialog component for user interactions.",
      url: "/components/pausecard",
      image: "/thumbnails/pausecard.png" // Assuming the image file name
    },
    {
      heading: "Createnewoptions",
      subheading: "A flexible dropdown menu component for creating new options.",
      url: "/components/Createnewoptions",
      image: "/thumbnails/Createnewoptions.png" // Assuming the image file name
    },
    {
      heading: "task herosection",
      subheading: "A hero section tailored for task-oriented applications.",
      url: "/components/tasklanding",
      image: "/thumbnails/tasklanding.png" // Assuming the image file name
    },
    {
      heading: "glassy sign up",
      subheading: "A visually appealing sign-up component with a glassy effect.",
      url: "/components/glassysignup",
      image: "/thumbnails/glassysignup.png" // Assuming the image file name
    },
    {
      heading: "Theme toggle",
      subheading: "A component that allows users to switch between light and dark themes.",
      url: "/components/Themetoggle",
      image: "/thumbnails/themetoggle.png" // Assuming the image file name
    },
    {
      heading: "task herosection",
      subheading: "Another hero section designed specifically for task management.",
      url: "/components/taskherosection",
      image: "/thumbnails/taskherosection.png" // Assuming the image file name
    },
    {
      heading: "Interactive icon bar",
      subheading: "An icon bar that provides interactive features for users.",
      url: "/components/interactiveiconbar",
      image: "/thumbnails/interactiveiconbar.png" // Assuming the image file name
    },
    {
      heading: "Number motion",
      subheading: "A component that animates numbers for dynamic presentations.",
      url: "/components/numbermotion",
      image: "/thumbnails/numbermotion.png" // Assuming the image file name
    },
    {
      heading: "Searchbox hover",
      subheading: "A search box component that enhances user experience with hover effects.",
      url: "/components/searchboxhover",
      image: "/thumbnails/searchboxhover.png" // Assuming the image file name
    },
    {
      heading: "Pricing card",
      subheading: "A card component that displays pricing options attractively.",
      url: "https://symphonious-cranachan-6d7191.netlify.app/",
      image: "/thumbnails/pricecard.png" 
    },
    {
      heading: "metricdashboard",
      subheading: "A dashboard component for displaying metrics and analytics.",
      url: "/components/metricdashboard",
      image: "/thumbnails/metricdashboard.png" 
    },
    {
      heading: "carosualstripe",
      subheading: "A carousel component that showcases items in a stripe format.",
      url: "/components/carosualstripe",
      image: "/thumbnails/carosualstripe.png" 
    },

  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredComponents = components.filter(component =>
    component.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.subheading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${GeistSans.className} bg-gray-50`}>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
         
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8  rounded-lg">
           
            </div>
            <span className="text-xl font-bold">SupaSpark</span>
          </div>

          {/* Middle: Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="/components" className="text-gray-600 hover:text-gray-900">
              Components
            </a>
            <a href="/templates" className="text-gray-600 hover:text-gray-900">
              Templates
            </a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
          </div>

          {/* Left: Request Button and Search Bar */}
          <div className="flex items-center space-x-2">
            <a href="/components/request" className="text-white rounded  text-sm font-sfpro bg-black p-[7px]">
              Request
            </a>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 fixed h-[calc(100vh-4rem)] border-r border-gray-200 p-4 bg-white">
          <div className="h-full overflow-auto">
            <div className="px-4 py-2 text-black text-xl font-sfpro">
              All Components
            </div>
            <div className="space-y-1 mt-2">
              {componentsList.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block px-4 py-2 text-lg font-sfpro text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-64 flex-1 p-8">
          <div className="grid grid-cols-2 gap-8">
            {filteredComponents.map((component, index) => (
              <a 
                key={index} 
                href={component.url}
                className="block group transition-transform hover:scale-[1.02] duration-200"
              >
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm group-hover:border-blue-500 group-hover:shadow-md transition-all duration-200">
                    <div className="relative w-full h-[300px]">
                      <img 
                        className='object-cover w-full h-full' // Ensures the image fits the card
                        src={component.image} 
                        alt={component.heading} 
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl  font-sfpro font-bold text-gray-900 group-hover:text-blue-600">
                      {component.heading}
                    </h3>
                    <p className="mt-1 text-lg font-sfpro text-gray-500">
                      {component.subheading}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;