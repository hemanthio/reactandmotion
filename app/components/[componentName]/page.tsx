'use client'

// app/components/[componentName]/page.tsx

import { useParams, notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

// Function to load the component dynamically
const loadComponent = async (name: string) => {
  try {
    const Component = await import(`../../../componentsLibrary/${name}`);
    return Component.default;
  } catch (error) {
    console.error(`Component ${name} not found.`);
    return null;
  }
};

const ComponentPage = async () => {
  const { componentName } = useParams();
  // Load the component based on the parameter
  const componentNameString = Array.isArray(componentName) ? componentName[0] : componentName;
  const Component = await loadComponent(componentNameString);

  if (!Component) return notFound();

  return (
    <div className="relative font-sfpro"> {/* Added relative positioning to the parent div */}
      <Component />
      <Link href="/components" passHref>
        <button className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full z-10">
          Go to Components
        </button>
      </Link>
    </div>
  );
};

export default ComponentPage;
