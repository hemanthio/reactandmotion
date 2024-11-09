'use client'

// app/components/[componentName]/page.tsx

import { useParams, notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import React from 'react';

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
    <div >
     
      <Component />
      
    </div>
  );
};

export default ComponentPage;
