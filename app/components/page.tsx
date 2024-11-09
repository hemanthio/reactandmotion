'use client'

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SVGComponent from '../supaspark';
import { GeistSans } from 'geist/font/sans';

const Layout = () => {
  const componentsList = [
    { name: "Button", url: "/components/button" },
    { name: "Card", url: "/components/card" },
    { name: "Modal", url: "/components/modal" },
    { name: "Dropdown", url: "/components/dropdown" },
    { name: "Table", url: "/components/table" },
    { name: "Accordion", url: "/components/accordion" },
    { name: "Tabs", url: "/components/tabs" },
    { name: "Avatar", url: "/components/avatar" },
  ];

  const components = [
    {
      heading: "Herosection",
      subheading: "Interactive button component with various styles and states. Highly customizable and accessible.",
      url: "/components/herosection",
      image: "/thumbnails/herosection.png" // Assuming the image file name
    },
    {
      heading: "FeatureTabs",
      subheading: "Versatile card component for content display with flexible layout options",
      url: "/components/FeatureTabs",
      image: "/thumbnails/featuretabs.png" // Assuming the image file name
    },
    {
      heading: "pauscard",
      subheading: "Customizable modal dialog component with backdrop and animations",
      url: "/components/pausecard",
      image: "/thumbnails/pausecard.png" // Assuming the image file name
    },
    {
      heading: "Steps",
      subheading: "Flexible dropdown menu with custom triggers and positioning",
      url: "/components/Steps",
      image: "/thumbnails/steps.png" // Assuming the image file name
    }
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

          {/* Right: Search */}
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
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 fixed h-[calc(100vh-4rem)] border-r border-gray-200 p-4 bg-white">
          <div className="h-full overflow-auto">
            <div className="px-4 py-2 text-gray-600 font-medium">
              All Components
            </div>
            <div className="space-y-1 mt-2">
              {componentsList.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
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
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {component.heading}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
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